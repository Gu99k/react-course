import React from "react";
import Subject from "./Subject";
import { useDataProvider } from "./ContextApi";

function Students() {
  return (
    <div className="bg-yellow-200 p-4">
      <h2>Students</h2>
      <Subject />
    </div>
  );
}

export default Students;
