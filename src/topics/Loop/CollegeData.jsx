import React from "react";
import StudentD from "./StudentD";

function CollegeData({ college }) {
  console.log(college);

  return (
    <div className="mb-3 bg-red-300 p-4 rounded-3xl">
      <p>make component for outer loop</p>
      <h1 className="text-2xl font-bold">{college.name}</h1>
      <ul className="list-disc pl-8 my-list">
        <li>{college.email}</li>
        <li>{college.city}</li>
        <li>{college.web}</li>
        <li>
          <h1 className="font-bold text-3xl capitalize ">
            make inner loop with students data
          </h1>
          {college.StudentsData.map((student) => (
            <StudentD student={student} />
          ))}
        </li>
      </ul>
    </div>
  );
}

export default CollegeData;
