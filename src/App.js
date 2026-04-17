import React, { useState } from "react";

// 🔹 Component + Props
function StudentCard({ name, course, status }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>{name}</h3>
      <p>Course: {course}</p>
      <p>Status: {status}</p>
    </div>
  );
}

function App() {
  // 🔹 State
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  // 🔹 Event Handling (Form submit)
  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Course:", course);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Day 1 - React Basics</h1>

      {/* 🔹 Form UI */}
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>Submit</button>

      <hr />

      {/* 🔹 Component Usage */}
      <h2>Preview</h2>

      <StudentCard
        name={name}
        course={course}
        status="Active"
      />
    </div>
  );
}

export default App;