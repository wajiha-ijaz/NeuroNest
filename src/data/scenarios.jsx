export const scenarios = {
  // 1. STARTING CONVERSATIONS
  starting_conv: {
    title: "Starting a Conversation",
    steps: [
      {
        botQuestion: "You see a classmate wearing a shirt from your favorite band. What do you say?",
        options: [
          { text: "Cool shirt! I love that band too.", correct: true, feedback: "Awesome choice! Sharing a common interest is the fastest way to make a friend." },
          { text: "I like your shirt.", correct: false, feedback: "That's a nice start, but adding 'I love that band too' gives them a reason to talk back to you!" },
          { text: "Where did you get that?", correct: true, feedback: "Great! Asking a question is a perfect way to keep the conversation moving." }
        ]
      },
      {
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
        botQuestion: "You're at a party and feel overwhelmed by the noise. What's a healthy move?",
        options: [
          { text: "Step outside for 5 minutes to breathe.", correct: true, feedback: "Spot on! Taking a 'sensory break' is a superpower for staying calm." },
          { text: "Just leave without telling anyone.", correct: false, feedback: "You can leave if you need to, but telling one friend helps them not worry about you!" },
          { text: "Find a quiet corner and check my phone.", correct: true, feedback: "That’s a great way to recharge your social battery without leaving the fun." }
        ]
      }
    ]
  },

  // 3. JOINING A GROUP
  joining_group: {
    title: "Joining a Group",
    steps: [
      {
        botQuestion: "A group of people are talking about a movie you just saw. How do you join in?",
        options: [
          { text: "Wait for a pause and say, 'I just saw that too! What did you think?'", correct: true, feedback: "Beautifully timed! Waiting for a pause shows you're a great listener." },
          { text: "Interrupt and tell them the ending.", correct: false, feedback: "Oops! People usually don't like spoilers or being interrupted. Try waiting for a gap!" },
          { text: "Stand nearby and listen first.", correct: true, feedback: "Totally fine! Checking the 'vibe' of the group before speaking is a smart move." }
        ]
      }
    ]
  },

  // 4. HANDLING DISAGREEMENTS
  disagreements: {
    title: "Handling Disagreements",
    steps: [
      {
        botQuestion: "A friend says a game you love is 'boring.' How do you respond?",
        options: [
          { text: "That's okay! What games do you prefer?", correct: true, feedback: "You rock! Respecting their opinion while staying curious is very mature." },
          { text: "You just don't know how to play it.", correct: false, feedback: "That might make them feel defensive. Try asking what they don't like about it instead." },
          { text: "I actually really like the strategy part of it.", correct: true, feedback: "Nice! You're sharing your perspective without being mean." }
        ]
      }
    ]
  },

  // 5. MAKING PLANS
  making_plans: {
    title: "Making Plans",
    steps: [
      {
        botQuestion: "You want to hang out with a friend this weekend. What do you text?",
        options: [
          { text: "Hey! Want to grab coffee or see a movie on Saturday?", correct: true, feedback: "Excellent! You gave specific options, which makes it easier for them to say yes." },
          { text: "Do you want to do something?", correct: false, feedback: "A bit vague! Friends usually prefer when you suggest a specific activity." },
          { text: "Are you free this weekend?", correct: true, feedback: "A good 'vibe check' to see if they are available first!" }
        ]
      }
    ]
  },

  // 6. GIVING COMPLIMENTS
  compliments: {
    title: "Giving Compliments",
    steps: [
      {
        botQuestion: "Your friend did a great job on a presentation. What do you say?",
        options: [
          { text: "You were so brave speaking up there! Great job.", correct: true, feedback: "How kind! Complimenting their effort is very meaningful." },
          { text: "I liked your slides.", correct: true, feedback: "Simple and sweet. Everyone loves knowing their work was noticed." },
          { text: "I could never do that.", correct: false, feedback: "Try to keep the focus on their success! 'You did great' is better." }
        ]
      }
    ]
  },

  // 7. ASKING FOR HELP
  asking_help: {
    title: "Asking for Help",
    steps: [
      {
        botQuestion: "You're lost in a new building. How do you ask for directions?",
        options: [
          { text: "Excuse me, do you know where Room 302 is?", correct: true, feedback: "Perfect. Using 'Excuse me' is the best way to get someone's attention politely." },
          { text: "Where is Room 302?", correct: false, feedback: "A bit blunt! Adding a 'Hi' or 'Excuse me' makes people much more willing to help." },
          { text: "I'm looking for the math wing, can you point me there?", correct: true, feedback: "Great! Being specific helps them give you better directions." }
        ]
      }
    ]
  },

  // 8. RECEIVING A GIFT
  receiving_gifts: {
    title: "Receiving a Gift",
    steps: [
      {
        botQuestion: "Someone gives you a gift you already have. What do you do?",
        options: [
          { text: "Thank you so much! That was so thoughtful of you.", correct: true, feedback: "Perfect. You are thanking them for the 'thought,' which is what matters most!" },
          { text: "I already have this.", correct: false, feedback: "Honesty is good, but it might hurt their feelings. It's usually better to just say thanks!" },
          { text: "Oh cool, I love these! Thank you.", correct: true, feedback: "Great way to stay positive and make the giver feel good." }
        ]
      }
    ]
  },

  // 9. ENDING A CONVERSATION
  ending_conv: {
    title: "Ending a Conversation",
    steps: [
      {
        botQuestion: "You need to leave, but your friend is still talking. How do you exit?",
        options: [
          { text: "It was great catching up! I have to head to class now, talk soon?", correct: true, feedback: "Smooth! You gave a reason for leaving and planned a future chat." },
          { text: "I have to go. Bye.", correct: false, feedback: "A little abrupt. Try adding 'It was nice talking to you' to soften the exit." },
          { text: "Oh look at the time! I've gotta run, but let's text later.", correct: true, feedback: "Very friendly and clear!" }
        ]
      }
    ]
  },

  // 10. HANDLING MISTAKES
  mistakes: {
    title: "Handling Mistakes",
    steps: [
      {
        botQuestion: "You accidentally bumped into someone and they dropped their books. What do you do?",
        options: [
          { text: "Oh, I'm so sorry! Let me help you pick those up.", correct: true, feedback: "You're a star! Apologizing and offering help fixes the situation instantly." },
          { text: "Watch where you're going!", correct: false, feedback: "Wait! Even if it was an accident, being kind helps prevent an argument." },
          { text: "*Quickly walk away*", correct: false, feedback: "Stopping to say 'Sorry' shows you're a responsible and nice person!" }
        ]
      }
    ]
  }
};