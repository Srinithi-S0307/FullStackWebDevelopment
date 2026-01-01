import React, { useState } from "react";

export default function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const messages = [
      "📧 You received a new message",
      "💳 Payment completed successfully",
      "⚠ System maintenance scheduled",
      "📦 Order shipped",
      "🎉 New user registered"
    ];

    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setNotifications([{ text: randomMsg, time: new Date().toLocaleTimeString() }, ...notifications]);
  };

  return (
    <div className="container">
      <h1>🔔 Dashboard Notifications</h1>
      <button onClick={addNotification}>Add Notification</button>

      <div className="list">
        {notifications.map((n, index) => (
          <div key={index} className="notification">
            <span>{n.text}</span>
            <small>{n.time}</small>
          </div>
        ))}
      </div>

      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #141E30, #243B55);
        }

        .container {
          height: 100vh;
          padding-top: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
        }

        button {
          padding: 12px 30px;
          border-radius: 20px;
          border: none;
          background: linear-gradient(135deg, #f7971e, #ffd200);
          color: #333;
          font-size: 16px;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .list {
          width: 350px;
        }

        .notification {
          background: rgba(255,255,255,0.15);
          padding: 12px;
          border-radius: 10px;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
        }

        small {
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}