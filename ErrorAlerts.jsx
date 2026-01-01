import React, { useState } from "react";

export default function ErrorAlerts() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const correctUser = "admin";
  const correctPass = "12345";

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      alert("❌ Please fill all fields!");
      return;
    }

    if (username === correctUser && password === correctPass) {
      alert("✔ Login Successful!");
      setIsLoggedIn(true);
    } else {
      alert("❌ Invalid Username or Password!");
    }
  };

  return (
    <div className="container">

      {!isLoggedIn ? (
        <>
          <h1>🔑 Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
          </form>
        </>
      ) : (
        <div className="dashboard">
          <h1>🎉 Welcome {username}</h1>
          <p>You are logged in successfully.</p>
        </div>
      )}

      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(120deg, #0f2027, #203a43, #2c5364);
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

        .dashboard {
          text-align: center;
        }
      `}</style>
    </div>
  );
}