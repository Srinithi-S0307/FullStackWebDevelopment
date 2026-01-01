import React, { useState } from "react";

export default function Workshop() {

  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("");

  return (
    <div className="container">
      <h1>📝 Workshop Registration</h1>

      <div className="form-box">
        <div className="form">
          <input
            type="text"
            placeholder="Participant Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Workshop Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <button onClick={() => alert("✔ Registration Saved Successfully!")}>
            Register
          </button>
        </div>

        <div className="preview">
          <h2>📋 Live Preview</h2>
          <p><b>Name:</b> {name || "---"}</p>
          <p><b>Topic:</b> {topic || "---"}</p>
          <p><b>Email:</b> {email || "---"}</p>
          <p><b>Level:</b> {level || "---"}</p>
        </div>
      </div>

      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(120deg, #1d4350, #a43931);
        }

        .container {
          min-height: 100vh;
          padding-top: 50px;
          color: white;
          text-align: center;
        }

        h1 {
          font-size: 38px;
          margin-bottom: 30px;
        }

        .form-box {
          display: flex;
          justify-content: center;
          gap: 40px;
        }

        .form, .preview {
          background: rgba(255,255,255,0.15);
          padding: 25px;
          border-radius: 15px;
          width: 300px;
        }

        input, select {
          width: 100%;
          margin-bottom: 15px;
          padding: 10px;
          border-radius: 8px;
          border: none;
          font-size: 16px;
        }

        button {
          width: 100%;
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

        .preview h2 {
          margin-bottom: 15px;
        }

        .preview p {
          font-size: 16px;
          text-align: left;
        }
      `}</style>
    </div>
  );
}