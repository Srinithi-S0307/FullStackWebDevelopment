import React, { useState } from "react";

export default function Blog() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (comment === "") {
      alert("❌ Please enter a comment!");
      return;
    }
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="container">
      <div className="blog">
        <h1>📝 React Blog Post</h1>
        <p>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application, and React will efficiently update
          and render just the right components when your data changes.
        </p>

        <h3>💬 Comments</h3>

        <div className="comment-box">
          <input
            type="text"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={addComment}>Post</button>
        </div>

        <div className="comment-list">
          {comments.map((c, index) => (
            <div key={index} className="comment">
              {c}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #f2f2f2;
        }

        .container {
          display: flex;
          justify-content: center;
          padding: 40px;
        }

        .blog {
          background: white;
          padding: 30px;
          border-radius: 15px;
          width: 100%;
          max-width: 600px;
        }

        h1 {
          margin-bottom: 10px;
        }

        .comment-box {
          display: flex;
          margin-bottom: 15px;
        }

        input {
          flex: 1;
          padding: 10px;
          border-radius: 8px 0 0 8px;
          border: 1px solid #ccc;
        }

        button {
          padding: 10px 20px;
          border-radius: 0 8px 8px 0;
          border: none;
          background: #0072ff;
          color: white;
          cursor: pointer;
        }

        .comment {
          background: #f5f5f5;
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 8px;
        }

        @media (max-width: 600px) {
          .blog {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}