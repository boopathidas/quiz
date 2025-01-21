  import React, { useState, useEffect } from "react";
  import "./App.css";  // Ensure your styles are correctly linked

  const questions = [
    { "question": "What are the main parts of a computer?", "options": ["Input Devices", "Output Devices", "Storage Devices", "All of the above"], "answer": "All of the above" },
    { "question": "What does CPU stand for, and what is its role in the computer?", "options": ["Central Processing Unit", "Central Process Unit", "Computer Personal Unit", "Central Processor Unit"], "answer": "Central Processing Unit" },
    { "question": "What is the first step in turning on a desktop computer or laptop?", "options": ["Press the power button", "Wait for the operating system to load", "Connect to the internet", "Insert a USB drive"], "answer": "Press the power button" },
    { "question": "How do you access the Start menu in Windows OS?", "options": ["Click on the Start button", "Press Alt + Tab", "Press Windows Key + E", "Click on File Explorer"], "answer": "Click on the Start button" },
    { "question": "What are 'Home Row' keys, and why should you start with these when learning to type?", "options": ["They are the middle keys on the keyboard, providing a reference position", "They are the keys used for shortcuts", "They are the number keys", "They are the function keys"], "answer": "They are the middle keys on the keyboard, providing a reference position" },
    { "question": "Name one online tool you can use to practice typing.", "options": ["TypingClub", "Notepad", "WordPad", "Microsoft Excel"], "answer": "TypingClub" },
    { "question": "What is the role of an Operating System (OS)?", "options": ["It manages hardware and software resources", "It helps to create files", "It connects the computer to the internet", "It displays images and videos"], "answer": "It manages hardware and software resources" },
    { "question": "Which of the following is a common shortcut to open File Explorer in Windows?", "options": ["Ctrl + E", "Windows Key + E", "Alt + E", "Windows Key + F"], "answer": "Windows Key + E" },
    { "question": "Which of the following is an example of external storage?", "options": ["Hard Drive", "USB Drive", "SSD", "Cloud Storage"], "answer": "USB Drive" },
    { "question": "What file extension is used for Word documents?", "options": [".txt", ".docx", ".jpg", ".mp3"], "answer": ".docx" },
    { "question": "What is the purpose of creating folders on your computer?", "options": ["To save files on the desktop", "To organize files by category", "To increase computer speed", "To delete unwanted files"], "answer": "To organize files by category" },
    { "question": "What shortcut do you use to open File Explorer in Windows?", "options": ["Ctrl + E", "Windows Key + E", "Alt + F", "Windows Key + F"], "answer": "Windows Key + E" },
    { "question": "Which of the following shortcuts allows you to create a new folder in File Explorer?", "options": ["Ctrl + N", "Ctrl + Shift + N", "Ctrl + F", "Ctrl + T"], "answer": "Ctrl + Shift + N" },
    { "question": "What is the primary function of Notepad?", "options": ["Creating and editing images", "Typing, editing, and saving plain text", "Designing web pages", "Playing audio files"], "answer": "Typing, editing, and saving plain text" },
    { "question": "Which keyboard shortcut is used to copy text in Notepad?", "options": ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + A"], "answer": "Ctrl + C" },
    { "question": "How can you paste copied or cut text in Notepad?", "options": ["Ctrl + P", "Ctrl + V", "Ctrl + X", "Ctrl + Z"], "answer": "Ctrl + V" },
    { "question": "What does the Ctrl + Z shortcut do in Notepad?", "options": ["Paste the text", "Cut the text", "Undo the last action", "Redo the last action"], "answer": "Undo the last action" },
    { "question": "Which shortcut is used to find a specific word or phrase in a Notepad document?", "options": ["Ctrl + F", "Ctrl + H", "Ctrl + N", "Ctrl + S"], "answer": "Ctrl + F" },
    { "question": "What is the primary function of Microsoft Word?", "options": ["Creating and editing spreadsheets", "Creating and editing presentations", "Creating and editing text documents", "Creating and editing images"], "answer": "Creating and editing text documents" },
    { "question": "Which shortcut is used to copy selected content in Microsoft Word?", "options": ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + P"], "answer": "Ctrl + C" },
    { "question": "How can you change the font style, size, and color of text in Word?", "options": ["By using the Paragraph group", "By using the Home tab in the Font group", "By using the Review tab", "By using the Insert tab"], "answer": "By using the Home tab in the Font group" },
    { "question": "What does the Undo feature (Ctrl + Z) do in Microsoft Word?", "options": ["Redoes the last undone action", "Restores the last change", "Reverses the last action", "Saves the document"], "answer": "Reverses the last action" },
    { "question": "Which keyboard shortcut is used to align text to the center in Word?", "options": ["Ctrl + L", "Ctrl + R", "Ctrl + E", "Ctrl + J"], "answer": "Ctrl + E" },
    { "question": "How can you create a bulleted list in Word?", "options": ["By selecting text and clicking the Bullets button in the Paragraph group", "By pressing Ctrl + B", "By pressing Ctrl + U", "By selecting text and pressing Ctrl + Shift + N"], "answer": "By selecting text and clicking the Bullets button in the Paragraph group" },
    { "question": "Which feature allows you to replace one word or phrase with another in Word?", "options": ["Find", "Replace", "Undo", "Format Painter"], "answer": "Replace" },
    { "question": "What is Microsoft PowerPoint used for?", "options": ["Creating text documents", "Creating and editing spreadsheets", "Creating and editing presentations", "Creating and editing images"], "answer": "Creating and editing presentations" },
    { "question": "Which tab contains options for adding text, images, and shapes in PowerPoint?", "options": ["Home", "Insert", "Design", "Slide Show"], "answer": "Insert" },
    { "question": "How do you add a new slide in PowerPoint?", "options": ["Go to the Home tab and click New Slide", "Go to the Design tab and click New Slide", "Go to the Slide Show tab and click New Slide", "Press Ctrl + N"], "answer": "Go to the Home tab and click New Slide" },
    { "question": "Which shortcut is used to bold text in PowerPoint?", "options": ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + E"], "answer": "Ctrl + B" },
    { "question": "Where do you find the option to add transitions between slides?", "options": ["Insert tab", "Animations tab", "Design tab", "Transitions tab"], "answer": "Transitions tab" },
    { "question": "How can you change the background of a slide in PowerPoint?", "options": ["By going to the Design tab and selecting Format Background", "By going to the Insert tab and selecting Background", "By right-clicking on the slide and selecting Background", "By using the Slide Show tab"], "answer": "By going to the Design tab and selecting Format Background" },
    { "question": "Which feature allows you to see speaker notes during a presentation?", "options": ["Presenter View", "Slide Show Mode", "Rehearse Timings", "Animation Pane"], "answer": "Presenter View" },
    { "question": "What is the primary use of Microsoft Excel?", "options": ["Word processing", "Data organization, calculations, and analysis", "Creating presentations", "Graphic design"], "answer": "Data organization, calculations, and analysis" },
    { "question": "What is the name of an Excel file?", "options": ["Worksheet", "Workbook", "Sheet", "Cell"], "answer": "Workbook" },
    { "question": "What does the Formula Bar in Excel display?", "options": ["The contents of the active cell", "The cell's location", "The number of rows", "The total sum of cells"], "answer": "The contents of the active cell" },
    { "question": "Which key combination moves to the next cell to the right in Excel?", "options": ["Enter", "Ctrl + Arrow Key", "Tab", "Shift + Tab"], "answer": "Tab" },
    { "question": "What formula would you use to calculate the sum of numbers in cells A1 to A10?", "options": ["=AVERAGE(A1:A10)", "=SUM(A1:A10)", "=MAX(A1:A10)", "=COUNT(A1:A10)"], "answer": "=SUM(A1:A10)" },
    { "question": "Which Excel feature allows you to automatically fill cells with data?", "options": ["AutoFill", "AutoSum", "Flash Fill", "Data Validation"], "answer": "AutoFill" },
    { "question": "What type of data can you enter into an Excel cell?", "options": ["Text", "Numbers", "Dates", "All of the above"], "answer": "All of the above" },
    { "question": "How do you freeze the top row in Excel?", "options": ["By selecting View tab and clicking Freeze Panes", "By selecting Home tab and clicking Freeze", "By selecting Insert tab", "By using the right-click menu"], "answer": "By selecting View tab and clicking Freeze Panes" }
  ];


  function QuizApp() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [userDetails, setUserDetails] = useState({ name: "", email: "", phoneNumber: "" });
    const [quizStarted, setQuizStarted] = useState(false);

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
        } else {
          handleSubmitQuiz();
        }
        setAnswered(false); // Reset only if there are more questions
      }, 1000); // 1-second delay before next question
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmitDetails = (e) => {
      e.preventDefault();
      if (userDetails.name && userDetails.email && userDetails.phoneNumber) {
        setQuizStarted(true);
      } else {
        alert("Please fill in all fields.");
      }
    };
    const handleSubmitQuiz = () => {
      alert(`Thank you for submitting! Your score is ${score} / ${shuffledQuestions.length}`);
      setQuizStarted(false);  // Reset to allow restart
      setScore(0);  // Reset score for a new quiz session
      setCurrentQuestionIndex(0);  // Reset question index
    };
    return (
      <div className="quiz-app">
        {!quizStarted ? (
          <div className="user-details-section">
            <h1>Welcome to the Basic Computer Assessment</h1>
            <form onSubmit={handleSubmitDetails}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter ur name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter ur email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="enter ur number "
                  value={userDetails.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit">Start Quiz</button>
            </form>
          </div>
        ) : (
          <div className="question-section">
            <h1>Basic Computer Assessment</h1>
            {shuffledQuestions.length > 0 && currentQuestionIndex < shuffledQuestions.length ? (
              <div>
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
                <button onClick={handleSubmitQuiz}>Submit Quiz</button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  export default QuizApp;
