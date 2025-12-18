import { useState } from "react";

const initialStudents = [
  { id: 1, name: "Abi banu", present: false },
  { id: 2, name: "Bobbyyyy", present: false },
  { id: 3, name: "Charlieeee", present: false },
  { id: 4, name: "Danyyyyyy", present: false }
];

export default function AttendanceTracker() {
  const [students, setStudents] = useState(initialStudents);

  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const presentCount = students.filter((s) => s.present).length;
  const absentCount = students.length - presentCount;

  return (
    <div style={styles.container}>
      <h2> Attendance Tracker</h2>

      <div style={styles.summary}>
        <span>Present: {presentCount}</span>
        <span>Absent: {absentCount}</span>
      </div>

      <ul style={styles.list}>
        {students.map((student) => (
          <li key={student.id} style={styles.item}>
            <span>{student.name}</span>

            <button
              onClick={() => toggleAttendance(student.id)}
              style={{
                ...styles.button,
                backgroundColor: student.present ? "#4CAF50" : "#F44336"
              }}
            >
              {student.present ? "Present" : "Absent"}
            </button>
          </li>
        ))}
      </ul>
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
  summary: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px",
    fontWeight: "bold"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px"
  },
  button: {
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer"
  }
};
