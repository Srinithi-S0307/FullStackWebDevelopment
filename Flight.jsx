import React from "react";

export default function Flight() {

  const bookTicket = () => {

    let name = prompt("Enter Passenger Name:");
    if (!name) return alert("❌ Booking Cancelled!");

    let from = prompt("Enter From City:");
    if (!from) return alert("❌ Booking Cancelled!");

    let to = prompt("Enter To City:");
    if (!to) return alert("❌ Booking Cancelled!");

    let seats = prompt("Enter Number of Seats:");
    if (!seats || isNaN(seats)) return alert("⚠ Invalid Seat Count!");

    let price = seats * 2500;

    let confirmBooking = confirm(
      `Passenger: ${name}\nFrom: ${from}\nTo: ${to}\nSeats: ${seats}\nTotal Fare: ₹${price}\n\nConfirm Booking?`
    );

    if (confirmBooking) {
      alert("🎉 Ticket Booked Successfully!\nHappy Journey ✈️");
    } else {
      alert("❌ Booking Cancelled!");
    }
  };

  return (
    <div className="container">
      <h1>✈️ Flight Ticket Booking</h1>
      <p>Book your flight using JavaScript Dialog Boxes</p>
      <button onClick={bookTicket}>Book Flight</button>

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
          color: #fff;
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
          padding: 15px 40px;
          font-size: 18px;
          border-radius: 30px;
          border: none;
          background: linear-gradient(135deg, #ff512f, #f09819);
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(255,255,255,0.5);
        }
      `}</style>
    </div>
  );
}

