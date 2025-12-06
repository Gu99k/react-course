import React from "react";
import CollegeData from "./CollegeData";

function NestedLoop() {
  //   <p>UnderSatnd Nested looping Array structure</p>;

  const CollegesData = [
    {
      name: "SCRIET College",
      email: "scrietccs@gmail.com",
      city: "Meerut",
      web: "www.scrietccsunivsersity.com",
      StudentsData: [
        {
          name: "Sam bahadur",
          rollNumber: 100387474,
          branch: "CSE",
        },
      ],
    },
    {
      name: "KIT College",
      email: "kit@gmail.com",
      city: "Ghaziyabad",
      web: "www.kit.com",
      StudentsData: [
        {
          name: "Subhankar",
          rollNumber: 1003776874,
          branch: "CSE",
        },
      ],
    },
    {
      name: "IIT College",
      email: "scrietccs@gmail.com",
      city: "Kanpur",
      web: "www.sttikanpur.com",
      StudentsData: [
        {
          name: "Santosh",
          rollNumber: 1484834,
          branch: "ECE",
        },
      ],
    },
  ];

  return (
    <>
      <h1> NestedLoop</h1>
      <p>UnderSatnd Nested looping Array structure</p>
      <div className= "rounded-3xl p-3  ">
        <p className="font-bold capitalize text-3xl ">make outer loop</p>
        {CollegesData.map((college, index) => (
          <div key={index} className="m-5">
           <CollegeData college={college} />
          </div>
        ))}
      </div>

      
      
      
    </>
  );
}

export default NestedLoop;
