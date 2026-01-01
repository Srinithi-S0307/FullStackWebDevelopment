import React from "react";

export default function ReserveRoom() {

  const reserveRoom = () => {

    let name = prompt("Enter Guest Name:");
    if (!name) return alert("❌ Reservation Cancelled!");

    let roomType = prompt("Enter Room Type (Single / Double / Deluxe):");
    if (!roomType) return alert("❌ Reservation Cancelled!");

    let days = prompt("Enter Number of Days:");
    if (!days || isNaN(days)) return alert("⚠ Invalid Number of Days!");

    let pricePerDay = 0;

    if (roomType.toLowerCase() === "single") pricePerDay = 1500;
    else if (roomType.toLowerCase() === "double") pricePerDay = 2500;
    else if (roomType.toLowerCase() === "deluxe") pricePerDay = 4000;
    else return alert("⚠ Invalid Room Type!");

    let total = pricePerDay * days;

    let confirmReservation = confirm(
      `Guest Name: ${name}\nRoom Type: ${roomType}\nDays: ${days}\nPrice/Day: ₹${pricePerDay}\nTotal Amount: ₹${total}\n\nConfirm Reservation?`
    );

    if (confirmReservation) {
      alert("🎉 Room Reserved Successfully!\nEnjoy Your Stay 🏨");
    } else {
      alert("❌ Reservation Cancelled!");
    }
  };

  return (
    <div className="container">
      <h1>🏨 Hotel Reservation System</h1>
      <p>Reserve your room using JavaScript Dialog Boxes</p>
      <button onClick={reserveRoom}>Reserve Room</button>

      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #232526, #414345);
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
          margin-bottom: 10px;
        }

        p {
          font-size: 18px;
          margin-bottom: 25px;
        }

        button {
          padding: 14px 36px;
          font-size: 18px;
          border-radius: 25px;
          border: none;
          background: linear-gradient(135deg, #00c6ff, #0072ff);
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          transform: scale(1.1);
          box-shadow: 0 0 18px rgba(255,255,255,0.5);
        }
      `}</style>
    </div>
  );
}

