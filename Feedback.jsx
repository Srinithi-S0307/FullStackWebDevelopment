import { useState } from "react";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    rating: "5",
    comment: ""
  });

  const [feedbackList, setFeedbackList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.comment.trim()) return;

    setFeedbackList((prev) => [
      ...prev,
      { ...formData, id: Date.now() }
    ]);

    setFormData({
      name: "",
      rating: "5",
      comment: ""
    });
  };

  return (
    <div style={styles.container}>
      <h2>💬 Feedback Form</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />

        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="5">⭐⭐⭐⭐⭐ (5)</option>
          <option value="4">⭐⭐⭐⭐ (4)</option>
          <option value="3">⭐⭐⭐ (3)</option>
          <option value="2">⭐⭐ (2)</option>
          <option value="1">⭐ (1)</option>
        </select>

        <textarea
          name="comment"
          placeholder="Your feedback..."
          value={formData.comment}
          onChange={handleChange}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Submit Feedback
        </button>
      </form>

      <hr />

      <h3>📢 Submitted Feedback</h3>

      {feedbackList.length === 0 ? (
        <p style={styles.empty}>No feedback submitted yet.</p>
      ) : (
        <ul style={styles.list}>
          {feedbackList.map((fb) => (
            <li key={fb.id} style={styles.item}>
              <strong>{fb.name}</strong> — ⭐{fb.rating}
              <p>{fb.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  input: {
    padding: "8px"
  },
  textarea: {
    padding: "8px",
    minHeight: "80px"
  },
  button: {
    padding: "10px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  item: {
    borderBottom: "1px solid #eee",
    padding: "10px 0"
  },
  empty: {
    color: "#777",
    textAlign: "center"
  }
};
