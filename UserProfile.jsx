import React, { useState } from "react";

export default function UserProfile() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || age === "") {
      alert("❌ All fields are required!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("⚠ Please enter a valid email!");
      return;
    }

    if (isNaN(age) || age <= 0) {
      alert("⚠ Age must be a valid number!");
      return;
    }

    setSubmitted(true);
    alert("✔ Profile Updated Successfully!");
  };

  return (
    <div className="container">
      <h1>👤 Edit User Profile</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit">Update Profile</button>
      </form>

      {submitted && (
        <div className="result">
          <h3>Updated Profile</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Age: {age}</p>
        </div>
      )}

      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(120deg, #141E30, #243B55);
        }

        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
        }

        h1 {
          font-size: 38px;
          margin-bottom: 20px;
        }

        form {
          background: rgba(255,255,255,0.15);
          padding: 30px;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          width: 300px;
        }

        input {
          margin-bottom: 15px;
          padding: 10px;
          border-radius: 8px;
          border: none;
          font-size: 16px;
        }

        button {
          padding: 10px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(135deg, #00c6ff, #0072ff);
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        button:hover {
          opacity: 0.85;
        }

        .result {
          margin-top: 25px;
          background: rgba(255,255,255,0.15);
          padding: 20px;
          border-radius: 15px;
          width: 300px;
          text-align: left;
        }
      `}</style>
    </div>
  );
}

