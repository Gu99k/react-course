import React from 'react'

function StudentD({ student}) {
  return (
    <div>
      <p>make component for inner loop</p>
      <ul className="list-decimal pl-8 my-list">
        <li>{student.name}</li>
      </ul>
    </div>
  );
}

export default StudentD