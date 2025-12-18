import { useState } from "react";

export default function StateExample() {
  const [count, setCount] = useState(0);

  function buttonclick() {
    setCount(count + 1);
  }

  return (
    <>
      {/* INTERNAL CSS */}
      <style>
        {`
          .title {
            color: #A039E5;
            font-size: 28px;
            text-align: center;
            font-weight: bold;
          }

          .container {
            margin-top: 20px;
            text-align: center;
          }
        `}
      </style>

      <h1 className="title">State Example</h1>

      <div className="container">
        {/* INLINE CSS stays here */}
        <button
          onClick={buttonclick}
          style={{
            background: "#A039E5",
            color: "pink",
            padding: "10px 20px",
            border: "2px solid pink",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Visitor Count = {count}
        </button>
      </div>
    </>
  );
}
