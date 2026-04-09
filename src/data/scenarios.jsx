export const scenarios = {
  // 1. STARTING CONVERSATIONS
  starting_conv: {
    title: "Starting a Conversation",
    steps: [
      {
        difficulty: "easy",
        botQuestion: "You see a classmate wearing a shirt from your favorite band. What do you say?",
        options: [
          { text: "Cool shirt! I love that band too.", correct: true, feedback: "Awesome choice! Sharing a common interest is the fastest way to make a friend." },
          { text: "I like your shirt.", correct: false, feedback: "That's a nice start, but adding 'I love that band too' gives them a reason to talk back to you!" },
          { text: "Where did you get that?", correct: true, feedback: "Great! Asking a question is a perfect way to keep the conversation moving." }
        ]
      },
      {
        difficulty: "hard",
        botQuestion: "You're sitting next to someone new in the library. How do you say hello?",
        options: [
          { text: "Hi! Mind if I sit here? I'm [Name].", correct: true, feedback: "Perfect! You introduced yourself and respected their space. Very polite!" },
          { text: "Is this seat taken?", correct: true, feedback: "Classic and effective. It's a low-pressure way to start." },
          { text: "*Just sit down and stare*", correct: false, feedback: "A little smile or a 'Hi' goes a long way in making the other person feel comfortable!" }
        ]
      }
    ]
  },

  // 2. MANAGING SOCIAL ANXIETY
  social_anxiety: {
    title: "Managing Social Anxiety",
    steps: [
      {
        difficulty: "medium",
        botQuestion: "You're at a party and feel overwhelmed by the noise. What's a healthy move?",
        options: [
          { text: "Step outside for 5 minutes to breathe.", correct: true, feedback: "Spot on! Taking a 'sensory break' is a superpower for staying calm." },
          { text: "Just leave without telling anyone.", correct: false, feedback: "You can leave if you need to, but telling one friend helps them not worry about you!" },
          { text: "Find a quiet corner and check my phone.", correct: true, feedback: "That's a great way to recharge your social battery without leaving the fun." }
        ]
      },
      {
        difficulty: "hard",
        botQuestion: "A friend keeps talking to you, but you're getting really anxious. How do you handle it?",
        options: [
          { text: "Tell them: 'I'm feeling a bit anxious right now. Can we talk later?'", correct: true, feedback: "Excellent! Being honest and direct is the best way to handle this." },
          { text: "Smile and nod while panicking inside.", correct: false, feedback: "That might help short-term, but it's exhausting. Speaking up is better!" },
          { text: "Excuse yourself and take a break.", correct: true, feedback: "Good choice! Taking care of yourself is important." }
        ]
      }
    ]
  },

  // 3. JOINING A GROUP
  joining_group: {
    title: "Joining a Group",
    steps: [
      {
        difficulty: "easy",
        botQuestion: "A group of people are talking about a movie you just saw. How do you join in?",
        options: [
          { text: "Wait for a pause and say, 'I just saw that too! What did you think?'", correct: true, feedback: "Beautifully timed! Waiting for a pause shows you're a great listener." },
          { text: "Interrupt and tell them the ending.", correct: false, feedback: "Oops! People usually don't like spoilers or being interrupted. Try waiting for a gap!" },
          { text: "Stand nearby and listen first.", correct: true, feedback: "Totally fine! Checking the 'vibe' of the group before speaking is a smart move." }
        ]
      },
      {
        difficulty: "hard",
        botQuestion: "You want to join a group conversation but they seem to be having an inside joke. What do you do?",
        options: [
          { text: "Ask what they're laughing about and smile along.", correct: true, feedback: "Perfect! Showing interest makes people want to include you." },
          { text: "Assume they don't want you there and walk away.", correct: false, feedback: "Don't assume! Most groups are happy to have new people join." },
          { text: "Make your own joke to show you're funny.", correct: false, feedback: "That might work, but first listening shows respect and makes connection easier." }
        ]
      }
    ]
  },

  // 4. HANDLING DISAGREEMENTS
  disagreements: {
    title: "Handling Disagreements",
    steps: [
      {
        difficulty: "easy",
        botQuestion: "A friend says a game you love is 'boring.' How do you respond?",
        options: [
          { text: "That's okay! What games do you prefer?", correct: true, feedback: "You rock! Respecting their opinion while staying curious is very mature." },
          { text: "You just don't know how to play it.", correct: false, feedback: "That might make them feel defensive. Try asking what they don't like about it instead." },
          { text: "I actually really like the strategy part of it.", correct: true, feedback: "Nice! You're sharing your perspective without being mean." }
        ]
      },
      {
        difficulty: "hard",
        botQuestion: "Someone publicly disagrees with your opinion in front of others. You feel embarrassed and angry. What do you do?",
        options: [
          { text: "Stay calm and say: 'I see your point. Can we talk about this later?' Then change subject.", correct: true, feedback: "Smart! This saves both of you from embarrassment and lets emotions cool." },
          { text: "Get into an argument right there to prove you're right.", correct: false, feedback: "This usually makes things worse. Taking space is better for everyone." },
          { text: "Act like it doesn't bother you but feel upset inside.", correct: false, feedback: "That's understandable, but addressing it later helps relationship growth." }
        ]
      }
    ]
  },

  // 5. MAKING PLANS
  making_plans: {
    title: "Making Plans",
    steps: [
      {
        difficulty: "easy",
        botQuestion: "You want to hang out with a friend this weekend. What do you text?",
        options: [
          { text: "Hey! Want to grab coffee or see a movie on Saturday?", correct: true, feedback: "Excellent! You gave specific options, which makes it easier for them to say yes." },
          { text: "Do you want to do something?", correct: false, feedback: "A bit vague! Friends usually prefer when you suggest a specific activity." },
          { text: "Are you free this weekend?", correct: true, feedback: "A good 'vibe check' to see if they are available first!" }
        ]
      },
      {
        difficulty: "hard",
        botQuestion: "Your friend cancels plans at the last minute. You feel disappointed. How do you respond?",
        options: [
          { text: "Say: 'That's okay, I understand. Can we reschedule soon?'", correct: true, feedback: "Great! You're flexible AND keeping the friendship strong." },
          { text: "Get angry and say 'You always cancel on me!'", correct: false, feedback: "This might be true, but starting with accusation usually backfires." },
          { text: "Just say 'fine' and ignore them.", correct: false, feedback: "That might happen, but expressing how you feel (calmly) is healthier." }
        ]
      }
    ]
  },

  // 6. GIVING COMPLIMENTS
  compliments: {
    title: "Giving Compliments",
    steps: [
      {
        difficulty: "easy",
        botQuestion: "Your friend did a great job on a presentation. What do you say?",
        options: [
          { text: "You were so brave speaking up there! Great job.", correct: true, feedback: "How kind! Complimenting their effort is very meaningful." },
          { text: "I liked your slides.", correct: true, feedback: "Simple and sweet. Everyone loves knowing their work was noticed." },
          { text: "I could never do that.", correct: false, feedback: "Try to keep the focus on their success! 'You did great' is better." }
        ]
      },
      {
        difficulty: "hard",
        botQuestion: "You want to give your classmate a genuine compliment, but you're worried they might think it's weird. What do you do?",
        options: [
          { text: "Just say it genuinely: 'I really admire how you handle tough situations.'", correct: true, feedback: "Perfect! Genuine compliments are rarely weird. Most people appreciate them." },
          { text: "Wait for a group setting so it's less awkward.", correct: true, feedback: "Also a great approach! Makes it feel more natural." },
          { text: "Don't say anything because you're nervous.", correct: false, feedback: "Missing an opportunity to make someone's day! Being brave is worth it." }
        ]
      }
    ]
  },

  // 7. ASKING FOR HELP
  asking_help: {
    title: "Asking for Help",
    steps: [
      {
        difficulty: "easy",
        botQuestion: "You're lost in a new building. How do you ask for directions?",
        options: [
          { text: "Excuse me, do you know where Room 302 is?", correct: true, feedback: "Perfect. Using 'Excuse me' is the best way to get someone's attention politely." },
          { text: "Where is Room 302?", correct: false, feedback: "A bit blunt! Adding a 'Hi' or 'Excuse me' makes people much more willing to help." },
          { text: "I'm looking for the math wing, can you point me there?", correct: true, feedback: "Great! Being specific helps them give you better directions." }
        ]
      },
      {
        difficulty: "hard",
        botQuestion: "You're struggling with schoolwork, but you're embarrassed to ask your teacher for help. What do you do?",
        options: [
          { text: "Talk to them privately after class: 'I'm struggling with [topic]. Can you help me understand it?'", correct: true, feedback: "Excellent! Teachers WANT to help. This shows maturity and self-awareness." },
          { text: "Keep struggling alone to avoid embarrassment.", correct: false, feedback: "This only makes things worse. Teachers are there to help, not judge." },
          { text: "Ask your friends instead of the teacher.", correct: true, feedback: "Good option! Friends can help, though teacher might give clearer explanations." }
        ]
      }
    ]
  },

  // 8. RECEIVING A GIFT
  receiving_gifts: {
    title: "Receiving a Gift",
    steps: [
      {
        difficulty: "easy",
        botQuestion: "Someone gives you a gift you already have. What do you do?",
        options: [
          { text: "Thank you so much! That was so thoughtful of you.", correct: true, feedback: "Perfect. You are thanking them for the 'thought,' which is what matters most!" },
          { text: "I already have this.", correct: false, feedback: "Honesty is good, but it might hurt their feelings. It's usually better to just say thanks!" },
          { text: "Oh cool, I love these! Thank you.", correct: true, feedback: "Great way to stay positive and make the giver feel good." }
        ]
      },
      {
        difficulty: "hard",
        botQuestion: "Someone gives you an expensive gift, and you feel uncomfortable or obligated. How do you handle it?",
        options: [
          { text: "Accept it graciously but later talk to them: 'That's really generous. You didn't have to do that.'", correct: true, feedback: "Respectful and honest! Setting boundaries while showing appreciation is mature." },
          { text: "Refuse it immediately to avoid obligation.", correct: false, feedback: "That might hurt their feelings. Accept it first, then talk if needed." },
          { text: "Accept it but feel awkward forever.", correct: false, feedback: "Talking about it clears the air and strengthens your relationship." }
        ]
      }
    ]
  },

  // 9. ENDING A CONVERSATION
  ending_conv: {
    title: "Ending a Conversation",
    steps: [
      {
        difficulty: "easy",
        botQuestion: "You need to leave, but your friend is still talking. How do you exit?",
        options: [
          { text: "It was great catching up! I have to head to class now, talk soon?", correct: true, feedback: "Smooth! You gave a reason for leaving and planned a future chat." },
          { text: "I have to go. Bye.", correct: false, feedback: "A little abrupt. Try adding 'It was nice talking to you' to soften the exit." },
          { text: "Oh look at the time! I've gotta run, but let's text later.", correct: true, feedback: "Very friendly and clear!" }
        ]
      },
      {
        difficulty: "hard",
        botQuestion: "Someone keeps talking to you after you've tried to leave 3 times. They seem hurt when you try to go. What do you do?",
        options: [
          { text: "Be direct and kind: 'I really enjoy talking with you, but I need to go now. Can we continue this later?'", correct: true, feedback: "Perfect! Clear and compassionate. Most people will understand." },
          { text: "Feel guilty and stay even though you need to leave.", correct: false, feedback: "Your needs matter too! It's okay to set boundaries." },
          { text: "Just leave without saying anything.", correct: false, feedback: "This might hurt their feelings. A direct but kind approach is better." }
        ]
      }
    ]
  },

  // 10. HANDLING MISTAKES
  mistakes: {
    title: "Handling Mistakes",
    steps: [
      {
        difficulty: "easy",
        botQuestion: "You accidentally bumped into someone and they dropped their books. What do you do?",
        options: [
          { text: "Oh, I'm so sorry! Let me help you pick those up.", correct: true, feedback: "You're a star! Apologizing and offering help fixes the situation instantly." },
          { text: "Watch where you're going!", correct: false, feedback: "Wait! Even if it was an accident, being kind helps prevent an argument." },
          { text: "*Quickly walk away*", correct: false, feedback: "Stopping to say 'Sorry' shows you're a responsible and nice person!" }
        ]
      },
      {
        difficulty: "hard",
        botQuestion: "You made a significant mistake that affected someone else (like forgetting important plans). They're upset. How do you handle it?",
        options: [
          { text: "Apologize sincerely, take responsibility, and ask how you can fix it.", correct: true, feedback: "Excellent! This shows maturity and care about the relationship." },
          { text: "Make excuses: 'I was busy, I had a lot going on...'", correct: false, feedback: "Excuses make people feel less important. Own it without excuses." },
          { text: "Get defensive if they're upset with you.", correct: false, feedback: "Their feelings are valid. Listen and show you care about fixing things." }
        ]
      }
    ]
  }
};
