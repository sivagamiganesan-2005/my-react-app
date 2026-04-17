import React, { useState, useEffect } from "react";

function App() {
  // 🔹 List (5 students)
  const [students, setStudents] = useState([
    "Arun",
    "Bala",
    "Chitra",
    "Divya",
    "Ezhil"
  ]);

  // 🔹 Input state
  const [name, setName] = useState("");

  // 🔹 API data
  const [users, setUsers] = useState([]);

  // 🔹 Fetch API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // 🔹 Add new student
  const addStudent = () => {
    if (name.trim() === "") return;
    setStudents([...students, name]);
    setName("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Day 2 - React</h1>

      {/* 🔹 List Rendering + Keys */}
      <h2>Student List</h2>
      {students.map((student, index) => (
        <p key={index}>{student}</p>
      ))}

      {/* 🔹 Form Submit */}
      <h2>Add Student</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addStudent}>Add</button>

      <hr />

      {/* 🔹 Fetch API */}
      <h2>Users from API</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;