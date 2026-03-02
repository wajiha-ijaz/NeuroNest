import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { messages } = await req.json();
    
    const apiKey = process.env.GROQ_API_KEY || "";
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // Use Groq API with OpenAI-compatible format
    const url = "https://api.groq.com/openai/v1/chat/completions";

    const requestBody = {
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are a supportive, patient AI assistant designed specifically for autistic teens. Follow these guidelines:
- Be clear, direct, and literal. Avoid idioms, sarcasm, or figures of speech.
- Use structured, organized responses (numbered lists, bullet points when helpful).
- Be non-judgmental and affirming about special interests and communication styles.
- Validate feelings and provide concrete suggestions when asked for help.
- Keep responses clear and not overwhelming (shorter paragraphs).
- Ask clarifying questions if something is unclear.
- Support executive function by breaking tasks into steps.
- You are a safe, consistent, judgment-free space for conversation.`
        },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 1024,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Groq API Error:", errorData);
      return NextResponse.json(
        { error: "Failed to fetch AI response", details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    const text = data.choices[0].message.content;

    return NextResponse.json({ text });
  } catch (error) {
    // Enhanced error logging
    if (error instanceof Error) {
      console.error("Chat Error:", error);
      console.error("Stack Trace:", error.stack);
      return NextResponse.json(
        { error: "Failed to fetch AI response", details: error.message },
        { status: 500 }
      );
    } else {
      console.error("Unknown Error:", error);
      return NextResponse.json(
        { error: "Failed to fetch AI response", details: JSON.stringify(error) },
        { status: 500 }
      );
    }
  }
}