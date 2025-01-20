import React, { useState, useEffect } from "react";
import "./App.css";  // Ensure your styles are correctly linked

const questions = [
  { question: "What does CPU stand for?", options: ["Central Processing Unit", "Central Process Unit", "Computer Personal Unit", "Central Processor Unit"], answer: "Central Processing Unit" },
  { question: "What is the main function of RAM?", options: ["Store data permanently", "Store data temporarily", "Process data", "Input data"], answer: "Store data temporarily" },
  { question: "Which company developed JavaScript?", options: ["Microsoft", "Netscape", "Oracle", "Google"], answer: "Netscape" },
  { question: "What does the HTML tag <h1> represent?", options: ["Heading", "Hyperlink", "Image", "Paragraph"], answer: "Heading" },
  { question: "What is the full form of URL?", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Retrieval Locator", "Universal Retrieval Locator"], answer: "Uniform Resource Locator" },
  { question: "Which of these is a programming language?", options: ["HTML", "CSS", "JavaScript", "None of the above"], answer: "JavaScript" },
  { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Central Style Sheets"], answer: "Cascading Style Sheets" },
  { question: "What is the primary function of an operating system?", options: ["Manage hardware", "Provide internet access", "Manage software", "Control the CPU"], answer: "Manage hardware" },
  { question: "Which of the following is an input device?", options: ["Keyboard", "Monitor", "Printer", "Speakers"], answer: "Keyboard" },
  { question: "Which of the following is not a type of computer memory?", options: ["RAM", "ROM", "Cache", "Processor"], answer: "Processor" }
];

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Shuffle questions on initial render
  useEffect(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswerSelection = (selectedAnswer) => {
    if (answered) return;
  
    if (selectedAnswer === shuffledQuestions[currentQuestionIndex]?.answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setAnswered(true);
  
    setTimeout(() => {
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
      setAnswered(false); // Reset only if there are more questions
    }, 1000); // 1-second delay before next question
  };

  return (
    <div className="quiz-app">
      <h1>Basic Computer Assessment</h1>
      {shuffledQuestions.length > 0 && currentQuestionIndex < shuffledQuestions.length ? (
        <div className="question-section">
          <div className="question-number">
            Question {currentQuestionIndex + 1} / {shuffledQuestions.length}
          </div>
          <h2 className="question">{shuffledQuestions[currentQuestionIndex].question}</h2>
          <div className="options">
            {shuffledQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${answered ? "disabled" : ""}`}
                onClick={() => handleAnswerSelection(option)}
                disabled={answered}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="score-section">
          <h2>Your Score: {score} / {shuffledQuestions.length}</h2>
          <p>{score >= shuffledQuestions.length * 0.7 ? "Great job!" : "Keep practicing to improve!"}</p>
          <p>Thank you for participating!</p>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
