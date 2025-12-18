import { useState } from "react";

export default function ClassRoom() {
  const [poll, setPoll] = useState({
    question: "Which subject do you like most?",
    options: [
      { id: 1, text: "Math", votes: 0 },
      { id: 2, text: "Science", votes: 0 },
      { id: 3, text: "History", votes: 0 },
      { id: 4, text: "English", votes: 0 }
    ]
  });

  const vote = (id) => {
    setPoll((prev) => ({
      ...prev,
      options: prev.options.map((opt) =>
        opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt
      )
    }));
  };

  const totalVotes = poll.options.reduce(
    (sum, opt) => sum + opt.votes,
    0
  );

  return (
    <div style={styles.container}>
      <h2>📊 Classroom Poll</h2>
      <h4>{poll.question}</h4>

      <ul style={styles.list}>
        {poll.options.map((option) => {
          const percentage =
            totalVotes === 0
              ? 0
              : Math.round((option.votes / totalVotes) * 100);

          return (
            <li key={option.id} style={styles.option}>
              <button
                onClick={() => vote(option.id)}
                style={styles.voteBtn}
              >
                Vote
              </button>

              <div style={styles.optionText}>
                <strong>{option.text}</strong>
                <span>{option.votes} votes ({percentage}%)</span>

                <div style={styles.bar}>
                  <div
                    style={{
                      ...styles.fill,
                      width: `${percentage}%`
                    }}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <p style={styles.total}>Total Votes: {totalVotes}</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  option: {
    display: "flex",
    alignItems: "center",
    marginBottom: "14px",
    gap: "10px"
  },
  voteBtn: {
    padding: "6px 10px",
    cursor: "pointer"
  },
  optionText: {
    flex: 1
  },
  bar: {
    height: "8px",
    background: "#eee",
    borderRadius: "4px",
    marginTop: "4px",
    overflow: "hidden"
  },
  fill: {
    height: "100%",
    background: "#4CAF50"
  },
  total: {
    textAlign: "center",
    marginTop: "16px",
    fontWeight: "bold"
  }
};
