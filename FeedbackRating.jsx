import React, { useState } from "react";

export default function FeedbackRating() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitFeedback = (e) => {
    e.preventDefault();

    if (name === "" || rating === "" || comment === "") {
      alert("❌ Please fill all fields!");
      return;
    }

    alert("✔ Feedback Submitted Successfully!");
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>🎓 Student Feedback</h1>

      <form onSubmit={submitFeedback}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Select Rating</option>
          <option value="⭐">1 Star</option>
          <option value="⭐⭐">2 Stars</option>
          <option value="⭐⭐⭐">3 Stars</option>
          <option value="⭐⭐⭐⭐">4 Stars</option>
          <option value="⭐⭐⭐⭐⭐">5 Stars</option>
        </select>

        <textarea
          placeholder="Enter Your Feedback"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <button type="submit">Submit Feedback</button>
      </form>

      {submitted && (
        <div className="result">
          <h3>📝 Feedback Received</h3>
          <p><b>Name:</b> {name}</p>
          <p><b>Rating:</b> {rating}</p>
          <p><b>Comment:</b> {comment}</p>
        </div>
      )}

      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(120deg, #232526, #414345);
        }

        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
        }

        form {
          background: rgba(255,255,255,0.15);
          padding: 30px;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          width: 320px;
        }

        input, select, textarea {
          margin-bottom: 15px;
          padding: 10px;
          border-radius: 8px;
          border: none;
          font-size: 16px;
        }

        textarea {
          resize: none;
          height: 80px;
        }

        button {
          padding: 10px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(135deg, #f7971e, #ffd200);
          color: #333;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          opacity: 0.9;
        }

        .result {
          margin-top: 25px;
          background: rgba(255,255,255,0.15);
          padding: 20px;
          border-radius: 15px;
          width: 320px;
        }
      `}</style>
    </div>
  );
}