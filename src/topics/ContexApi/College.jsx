import React from "react";
import Class from "./Class";
import { useDataProvider } from "./ContextApi";

function College() {
  const [book, setBook] = useDataProvider();
  const handleOption = (e) => {
    setBook(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="bg-pink-300 p-4 ">
      <span className="font-bold">College </span>
      <div className="text-center pb-4">
        <label htmlFor="sub">Select Subject :</label>
        <select
          name="sub"
          id="sub"
          className="bg-amber-50 rounded-sm border"
          onChange={handleOption}
        >
          <option value="">Choose option</option>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
        </select>
      </div>
      <Class />
    </div>
  );
}

export default College;
