import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Box,
  Typography,
} from "@mui/material";

const questions = [
  {
    index: 0,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    index: 1,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter",
  },
  // Add 8 more questions here with index property
];

const chunkSize = 5;

function Exam() {
  // Use state to keep track of the current set of questions
  const [currentQuestions, setCurrentQuestions] = useState(
    questions.slice(0, chunkSize)
  );

  // Use state to keep track of the answers


  // Function to handle when the user submits an answer


  // Function to handle when the user clicks next
  const handleNextClick = () => {
    // Get the next set of questions
    const startIndex = currentQuestions[currentQuestions.length - 1].index + 1;
    const nextQuestions = questions.slice(startIndex, startIndex + chunkSize);
    setCurrentQuestions(nextQuestions);
  };

  const [answers, setAnswers] = useState({});
  
  const handleAnswerChange = (event, index) => {
    // Update the answers state with the new answer
    setAnswers({ ...answers, [index]: event.target.value });
  };

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
  };

  console.log(answers);

  return (
    <>
      <Box>
        <FormControl>
          {currentQuestions.map((question, index) => (
            <>
              <Typography>{question.question}</Typography>
              <RadioGroup
                aria-label={`question-${index}`}
                name={`question-${index}`}
                value={answers[question.index]}
                onChange={(e) => handleAnswerChange(e, question.index)}
              >
                {question.options.map((option, optionIndex) => (
                  <FormControlLabel
                    key={optionIndex}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </>
          ))}
        </FormControl>

        {currentQuestions.length < questions.length ? (
          <Button variant="contained" color="primary" onClick={handleNextClick}>
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleExamSubmit}
          >
            Submit Exam
          </Button>
        )}
      </Box>
    </>
  );
}

export default Exam;
