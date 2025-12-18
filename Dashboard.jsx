import { useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask
      }
    ]);
    setNewTask("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>📝 Task List Dashboard</h2>

      <div style={styles.inputRow}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p style={styles.empty}>No tasks yet.</p>
      ) : (
        <ul style={styles.list}>
          {tasks.map((task) => (
            <li key={task.id} style={styles.item}>
              <span>{task.text}</span>
              <button
                onClick={() => removeTask(task.id)}
                style={styles.removeBtn}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px"
  },
  inputRow: {
    display: "flex",
    gap: "8px",
    marginBottom: "16px"
  },
  input: {
    flex: 1,
    padding: "8px"
  },
  addBtn: {
    padding: "8px 14px",
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px"
  },
  removeBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px"
  },
  empty: {
    color: "#777",
    textAlign: "center"
  }
};
