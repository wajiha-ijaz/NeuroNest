"use client";

import { useState, useEffect, useRef } from "react";
import { scenarios } from "@/data/scenarios";
import Image from "next/image";

// --- TYPES FOR TS SAFETY ---
interface ScenarioOption { text: string; correct: boolean; feedback: string; }
interface ScenarioStep { botQuestion: string; options: ScenarioOption[]; }
interface Scenario { title: string; steps: ScenarioStep[]; }
interface Message { sender: "bot" | "user"; text: string; }

export default function CommunicationBuddyPage() {
  // --- 1. STATE MANAGEMENT ---
  const [userInput, setUserInput] = useState("");
  const [isFreeTalk, setIsFreeTalk] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      sender: "bot", 
      text: "Hi there! I am your AI Communication Buddy. I am here to help you with conversations, emotions, and everyday challenges. So, what's on your mind today?" 
    }
  ]);
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  // --- 2. API / FREE TALK LOGIC ---
  const handleFreeTalkSend = async () => {
    if (!userInput.trim()) return;

    const newUserMsg: Message = { sender: "user", text: userInput };
    const updatedMessages = [...messages, newUserMsg];
    
    setMessages(updatedMessages);
    setUserInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: updatedMessages.map(m => ({
            role: m.sender === "bot" ? "assistant" : "user",
            content: m.text
          }))
        }),
      });

      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.text }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev, 
        { sender: "bot", text: "I'm sorry, I'm having trouble connecting right now. Please try again!" }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // --- 3. SCENARIO LOGIC ---
  const startScenario = (key: string) => {
    const scenarioData = (scenarios as Record<string, Scenario>)[key];
    if (!scenarioData) return;
    setActiveScenario(scenarioData);
    setStepIndex(0);
    setMessages([{ 
      sender: "bot", 
      text: `Let's practice: ${scenarioData.title}. \n\n ${scenarioData.steps[0].botQuestion}` 
    }]);
  };

  const handleChoice = async (option: ScenarioOption) => {
    setMessages(prev => [...prev, { sender: "user", text: option.text }]);
    setIsTyping(true);
    
    await new Promise(res => setTimeout(res, 800));
    setIsTyping(false);
    
    setMessages(prev => [...prev, { sender: "bot", text: option.feedback }]);

    if (activeScenario && activeScenario.steps[stepIndex + 1]) {
      const nextIndex = stepIndex + 1;
      setStepIndex(nextIndex);
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: "bot", text: activeScenario.steps[nextIndex].botQuestion }]);
      }, 1200);
    } else {
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: "bot", text: "🎉 Great work! You've finished this practice session." }]);
        setActiveScenario(null);
      }, 2000);
    }
  };

  const progressPercent = activeScenario 
    ? ((stepIndex + 1) / activeScenario.steps.length) * 100 
    : 0;

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center font-sans">
      
      {/* TITLE SECTION */}
      <div className="mt-[20px] text-center px-4">
        <h1 className="text-3xl font-bold text-black tracking-tight">Interactive Activities</h1>
        <p className="text-gray-500 text-sm mt-1">Choose activities based on age group and developmental needs.</p>
      </div>

      <div className="mt-[20px] w-full bg-[#D1D5DB] h-[50px] flex items-center justify-center shadow-sm">
        <h2 className="text-2xl font-bold text-black italic tracking-wide">AI Communication Buddy</h2>
      </div>

      {/* CHAT BOX CONTAINER */}
      <div className="mt-[20px] relative w-full max-w-[900px] px-4 mb-20">
        
        {activeScenario && (
          <div className="w-full bg-gray-200 h-2 rounded-full mb-2 overflow-hidden">
            <div 
              className="bg-[#AFE879] h-full transition-all duration-500" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}

        <div className="w-full h-[700px] bg-white rounded-[20px] border-2 border-[#D1D5DB] shadow-[8px_8px_0px_0px_#BDB2FF] flex flex-col overflow-hidden">
          
          <div 
            ref={scrollRef} 
            className="flex-1 p-8 overflow-y-auto space-y-6"
            style={{
                backgroundImage: "url('/chatbot.jpeg')", 
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"} items-start gap-3`}>
                {msg.sender === "bot" && (
                  <div className="ml-[20px] mt-[20px] w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                    <Image src="/bot.jpg" alt="Bot" width={40} height={40} className="object-cover" />
                  </div>
                )}
                <div className={`ml-[10px] mt-[20px] p-4 rounded-[18px] max-w-[70%] text-[18px] shadow-sm leading-relaxed ${
                  msg.sender === "bot" 
                    ? "bg-[#D1D5FF]/95 text-black rounded-tl-none border border-[#BDB2FF] pl-[15px] mr-[5px]" 
                    : "bg-[#60A5FA] text-white rounded-tr-none"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="ml-12 flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
          </div>

          {/* INTERACTION AREA */}
          <div className="p-6 pb-[20px] bg-white border-t border-gray-100 flex flex-col items-center gap-4">
            
            {/* MODE SWITCHER TOGGLE */}
           <div className="mt-[20px] flex items-center gap-[20px] p-2 mb-4">
              <button 
                onClick={() => { 
                  setIsFreeTalk(false); 
                  setActiveScenario(null); 
                  setMessages([{ 
                    sender: "bot", 
                    text: "Hi there! I am your AI Communication Buddy. I am here to help you with conversations, emotions, and everyday challenges. So, what's on your mind today?" 
                  }]);
                }}
                className={`px-[15px] py-[6px] text-xs font-bold transition-all ${!isFreeTalk ? 'bg-white shadow-md text-black' : 'text-gray-400'}`}
              >
                Guided Practice
              </button>
              <button 
                onClick={() => { 
                  setIsFreeTalk(true); 
                  setActiveScenario(null); 
                  setMessages([]); // Remove all messages so first message is from user
                }}
                className={`px-[15px] py-[6px] text-xs font-bold transition-all ${isFreeTalk ? 'bg-white shadow-md text-black' : 'text-gray-400'}`}
              >
                Free Talk AI
              </button>
            </div>

            {/* INPUT BAR */}
            <div className="w-full flex justify-center">
              <div className={`w-[90%] max-w-[600px] h-[45px] flex items-center bg-gray-50 shadow-inner transition-all ${
                isFreeTalk ? "border-[#60A5FA] focus-within:ring-2 ring-blue-100" : "border-gray-300"
              }`}>
               <input 
  type="text" 
  value={userInput}
  onChange={(e) => setUserInput(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && isFreeTalk && handleFreeTalkSend()}
  placeholder={
    isFreeTalk 
      ? "Chat with your Buddy..." 
      : activeScenario 
        ? "Select an option below..." 
        : "Choose a scenario below..."
  } 
  className="flex-1 bg-transparent outline-none text-[16px] font-medium text-gray-700 placeholder:text-gray-400 disabled:cursor-not-allowed"
  disabled={!isFreeTalk} 
/>

<button 
  onClick={handleFreeTalkSend}
  disabled={(!isFreeTalk && activeScenario !== null) || !userInput.trim()}
  className={`
    ml-[10px] h-[32px] px-10 rounded-full font-bold text-sm shadow-sm border-b-2 transition-all
    bg-[#AFE879] border-[#8bc454] text-black
    ${(!isFreeTalk && activeScenario !== null) || !userInput.trim() 
      ? "cursor-not-allowed opacity-100" 
      : "hover:bg-[#9ed668] active:scale-95 cursor-pointer"
    }
  `}
>
  Send
</button>
              </div>
            </div>

            {/* BUTTONS AREA */}
            <div className="w-full flex justify-center flex-wrap gap-6 pt-4 overflow-y-auto max-h-[300px] p-2">
              {isFreeTalk ? (
                <div className="text-center animate-fade-in">
                  <p className="text-sm text-blue-400 font-medium italic">"I&apos;m listening! Practice anything you like here."</p>
                </div>
              ) : activeScenario ? (
                activeScenario.steps[stepIndex].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleChoice(opt)}
                    className="px-8 py-4 bg-white border-2 border-[#BDB2FF] rounded-2xl text-[14px] font-bold text-slate-700 hover:bg-[#F5F3FF] hover:border-[#60A5FA] hover:shadow-md transition-all active:scale-95 shadow-sm min-w-[180px]"
                  >
                    {opt.text}
                  </button>
                ))
              ) : (
                <div className="flex flex-wrap justify-center gap-[6px]">
                  <button onClick={() => startScenario("starting_conv")} className="px-8 py-4 bg-[#D1D5FF] rounded-2xl text-[15px] font-bold text-gray-800 hover:shadow-lg transition-all active:scale-95 shadow-md border-b-4 border-[#BDB2FF] min-w-[220px]">👋 Starting Conversation</button>
                  <button onClick={() => startScenario("social_anxiety")} className="px-8 py-4 bg-[#E0BBE4] rounded-2xl text-[15px] font-bold text-gray-800 hover:shadow-lg transition-all active:scale-95 shadow-md border-b-4 border-[#c28cc8] min-w-[220px]">🧘 Social Anxiety</button>
                  <button onClick={() => startScenario("joining_group")} className="px-8 py-4 bg-[#D1D5FF] rounded-2xl text-[15px] font-bold text-gray-800 hover:shadow-lg transition-all active:scale-95 shadow-md border-b-4 border-[#BDB2FF] min-w-[220px]">🤝 Joining a Group</button>
                  <button onClick={() => startScenario("disagreements")} className="px-8 py-4 bg-[#E0BBE4] rounded-2xl text-[15px] font-bold text-gray-800 hover:shadow-lg transition-all active:scale-95 shadow-md border-b-4 border-[#c28cc8] min-w-[220px]">🗣️ Handling Disagreements</button>
                  <button onClick={() => startScenario("making_plans")} className="px-8 py-4 bg-[#D1D5FF] rounded-2xl text-[15px] font-bold text-gray-800 hover:shadow-lg transition-all active:scale-95 shadow-md border-b-4 border-[#BDB2FF] min-w-[220px]">📅 Making Plans</button>
                  <button onClick={() => startScenario("compliments")} className="px-8 py-4 bg-[#E0BBE4] rounded-2xl text-[15px] font-bold text-gray-800 hover:shadow-lg transition-all active:scale-95 shadow-md border-b-4 border-[#c28cc8] min-w-[220px]">✨ Giving Compliments</button>
                  <button onClick={() => startScenario("asking_help")} className="px-8 py-4 bg-[#D1D5FF] rounded-2xl text-[15px] font-bold text-gray-800 hover:shadow-lg transition-all active:scale-95 shadow-md border-b-4 border-[#BDB2FF] min-w-[220px]">🙋 Asking for Help</button>
                  <button onClick={() => startScenario("receiving_gifts")} className="px-8 py-4 bg-[#E0BBE4] rounded-2xl text-[15px] font-bold text-gray-800 hover:shadow-lg transition-all active:scale-95 shadow-md border-b-4 border-[#c28cc8] min-w-[220px]">🎁 Receiving a Gift</button>
                  <button onClick={() => startScenario("ending_conv")} className="px-8 py-4 bg-[#C5A3FF] rounded-2xl text-[15px] font-bold text-gray-800 hover:shadow-lg transition-all active:scale-95 shadow-md border-b-4 border-[#b192e6] min-w-[220px]">🚪 Ending Conversation</button>
                  <button onClick={() => startScenario("mistakes")} className="px-8 py-4 bg-[#D1D5FF] rounded-2xl text-[15px] font-bold text-gray-800 hover:shadow-lg transition-all active:scale-95 shadow-md border-b-4 border-[#BDB2FF] min-w-[220px]">🩹 Handling Mistakes</button>
                </div>
              )}
            </div>
            
            {!isFreeTalk && activeScenario && (
              <button 
                onClick={() => setActiveScenario(null)}
                className="mt-[5px] text-[12px] text-gray-400 hover:text-red-400 uppercase tracking-tighter"
              >
                Exit Activity
              </button>
            )}
          </div>
        </div>
      </div>

      <footer className="mt-[50px] w-full h-[80px] bg-[#F6A572] flex items-center justify-center"></footer>
    </div>
  );
}