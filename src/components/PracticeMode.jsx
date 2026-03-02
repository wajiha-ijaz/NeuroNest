"use client";
import { useState } from "react";
import { scenarios } from "@/data/scenarios";

export default function PracticeMode({ scenarioKey, onExit }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [feedback, setFeedback] = useState("");
  const scenario = scenarios[scenarioKey];

  const handleAnswer = (option) => {
    setFeedback(option.feedback);
    if (option.correct) {
      // Logic for moving to next step or finishing
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border-2 border-dashed border-blue-200">
      <h3 className="font-bold text-blue-600 mb-4">{scenario.title}</h3>
      <p className="mb-6 text-gray-700">{scenario.steps[currentStep].botQuestion}</p>
      
      <div className="space-y-3">
        {scenario.steps[currentStep].options.map((opt, i) => (
          <button 
            key={i}
            onClick={() => handleAnswer(opt)}
            className="w-full text-left p-3 rounded-xl border hover:bg-blue-50 transition"
          >
            {opt.text}
          </button>
        ))}
      </div>

      {feedback && (
        <div className="mt-4 p-3 bg-blue-100 rounded-lg text-sm text-blue-800 animate-pulse">
          💡 {feedback}
        </div>
      )}

      <button onClick={onExit} className="mt-6 text-xs text-gray-400 underline">
        Stop Practice
      </button>
    </div>
  );
}