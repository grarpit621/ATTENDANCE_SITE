import React, { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Student 1', present: false },
    { id: 2, name: 'Student 2', present: false },
    
  ]);

  const markAttendance = (studentId) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId ? { ...student, present: !student.present } : student
      )
    );
  };

  const submitAttendance = () => {
    
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Class Attendance System</h1>
        <p>Date: {new Date().toDateString()}</p>
      </header>
      <div className="student-list">
        <h2>Student List</h2>
        <ul>
          {students.map(student => (
            <li key={student.id}>
              {student.name}
              <input
                type="checkbox"
                checked={student.present}
                onChange={() => markAttendance(student.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="attendance-status">
        <h2>Attendance Status</h2>
        <p>Present: {students.filter(student => student.present).length}</p>
        <p>Absent: {students.filter(student => !student.present).length}</p>
      </div>
      <button className="submit-button" onClick={submitAttendance}>Submit Attendance</button>
      <div className="feedback">
        {}
      </div>
    </div>
  );
}

export default App;