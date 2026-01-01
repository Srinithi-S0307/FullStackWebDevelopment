import React, { useState } from "react";

export default function EventRegistration() {
  const [message, setMessage] = useState("");

  const registerEvent = () => {
    let name = prompt("Enter Your Name:");
    if (!name) return alert("❌ Registration Cancelled!");

    let eventName = prompt("Enter Event Name:");
    if (!eventName) return alert("❌ Registration Cancelled!");

    let email = prompt("Enter Your Email:");
    if (!email) return alert("❌ Registration Cancelled!");

    let confirmRegister = confirm(
      `Name: ${name}\nEvent: ${eventName}\nEmail: ${email}\n\nConfirm Registration?`
    );

    if (confirmRegister) {
      alert("🎉 Registration Successful!");
      setMessage(`✔ ${name} registered for ${eventName}`);
    } else {
      alert("❌ Registration Cancelled!");
      setMessage("");
    }
  };

  return (
    <div className="container">
      <h1>🎫 Event Registration</h1>
      <p>Register for your favorite event easily!</p>
      <button onClick={registerEvent}>Register Now</button>

      {message && <div className="result">{message}</div>}

      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #1d4350, #a43931);
        }

        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
        }

        h1 {
          font-size: 40px;
          margin-bottom: 10px;
        }

        p {
          font-size: 18px;
          margin-bottom: 25px;
        }

        button {
          padding: 14px 38px;
          font-size: 18px;
          border-radius: 25px;
          border: none;
          background: linear-gradient(135deg, #f7971e, #ffd200);
          color: #333;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          transform: scale(1.1);
          box-shadow: 0 0 18px rgba(255,255,255,0.4);
        }

        .result {
          margin-top: 30px;
          background: rgba(255,255,255,0.15);
          padding: 12px 25px;
          border-radius: 12px;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}
