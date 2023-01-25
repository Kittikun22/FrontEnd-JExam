import React, { useState } from 'react';

const questions = [
    {
      index: 0,
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      answer: 'Paris'
    },
    {
      index: 1,
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
      answer: 'Jupiter'
    },
    // Add 8 more questions here with index property
  ];

const chunkSize = 5;

function Exam() {
    // Use state to keep track of the current set of questions
    const [currentQuestions, setCurrentQuestions] = useState(questions.slice(0, chunkSize));

    // Use state to keep track of the answers
    const [answers, setAnswers] = useState({});
    console.log(answers);
    // Function to handle when the user submits an answer
    const handleAnswerSubmit = (answer, index) => {
        // Update the answers state with the new answer
        setAnswers({...answers, [index]: answer});
    }

    // Function to handle when the user clicks next
    const handleNextClick = () => {
        // Get the next set of questions
        const startIndex = currentQuestions[currentQuestions.length - 1].index + 1;
        const nextQuestions = questions.slice(startIndex, startIndex + chunkSize);
        setCurrentQuestions(nextQuestions);
    }

    // Function to handle when the user submits the exam
    const handleExamSubmit = () => {
        // Check the answers and calculate the score
        let score = 0;
        Object.keys(answers).forEach((index) => {
          if (answers[index] === questions[index].answer) {
            score++;
          }
        });
    
        // Show the score or submit to a server
        alert(`Your score is ${score}`);
      }

    return (
        <div>
            <h1>Exam</h1>
            <form>
                {currentQuestions.map((question, index) => (
                    <div key={index}>
                        <p>{question.question}</p>
                        {question.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    value={option}
                                    onChange={e => handleAnswerSubmit(e.target.value, question.index)}
                                />
                                {option}
                            </div>
                        ))}
                    </div>
                ))}
            </form>
            {currentQuestions.length < questions.length ? (
                <button onClick={handleNextClick}>Next</button>
            ) : (
                <button onClick={handleExamSubmit}>Submit Exam</button>
            )}
        </div>
    );
}

export default Exam;
