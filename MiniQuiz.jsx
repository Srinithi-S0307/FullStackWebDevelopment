import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language is used in React?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "What does JSX stand for?",
    options: [
      "Java Syntax Extension",
      "JavaScript XML",
      "Java Source X",
      "JSON XML",
    ],
    answer: "JavaScript XML",
  },
];

export default function MiniQuiz() {
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswer = (qIndex, option) => {
    const isCorrect = questions[qIndex].answer === option;

    // prevent double scoring
    if (selectedAnswers[qIndex]) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [qIndex]: option,
    }));

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div style={styles.container}>
      <h2>📝 Mini Quiz</h2>
      <h3>Score: {score}</h3>

      {questions.map((q, qIndex) => (
        <div key={qIndex} style={styles.questionBox}>
          <p>{q.question}</p>

          {q.options.map((option) => {
            const selected = selectedAnswers[qIndex] === option;
            const correct = q.answer === option;

            return (
              <button
                key={option}
                onClick={() => handleAnswer(qIndex, option)}
                disabled={selectedAnswers[qIndex]}
                style={{
                  ...styles.button,
                  backgroundColor:
                    selected && correct
                      ? "#4CAF50"
                      : selected
                      ? "#F44336"
                      : "#eee",
                }}
              >
                {option}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    fontFamily: "Arial, sans-serif",
  },
  questionBox: {
    marginBottom: "20px",
  },
  button: {
    display: "block",
    margin: "6px 0",
    padding: "8px",
    width: "100%",
    cursor: "pointer",
  },
};
