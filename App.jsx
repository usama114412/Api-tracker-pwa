import { useState } from 'react';

const tasks = [
  { day: 1, task: "Watch 'What is API?' video", xp: 10 },
  { day: 2, task: "Test catfact.ninja in browser", xp: 10 },
  { day: 3, task: "Understand API vs Server", xp: 10 },
  { day: 4, task: "Watch REST API intro (Urdu/Eng)", xp: 10 },
  { day: 5, task: "Practice writing JSON", xp: 10 },
  { day: 6, task: "Learn HTTP methods: GET, POST", xp: 10 },
  { day: 7, task: "Quiz Day (Enki app)", xp: 30 },
];

export default function App() {
  const [completed, setCompleted] = useState([]);

  const toggleTask = (day) => {
    setCompleted((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const totalXP = completed.reduce(
    (sum, day) => sum + tasks.find((t) => t.day === day).xp,
    0
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>🎮 API Learning Tracker</h1>
      <p>XP Earned: {totalXP}</p>
      {tasks.map(({ day, task, xp }) => (
        <div
          key={day}
          onClick={() => toggleTask(day)}
          style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: 10,
            marginBottom: 10,
            backgroundColor: completed.includes(day) ? "#d4edda" : "#fff",
            cursor: "pointer",
          }}
        >
          <strong>Day {day}</strong>: {task} ({xp} XP)
        </div>
      ))}
    </div>
  );
}
