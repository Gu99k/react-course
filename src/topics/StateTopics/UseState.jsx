import React, { useState } from "react";
import DerivedState from "./DerivedState";
import StateLiftingUp from "./StateLiftingUp";
import UpdateObjectInState from "./UpdateObjectInState";
import UpdateArrayInState from "./UpdateArrayInState";

function UseState() {
  // here i am declearing state for use of x, y point for mouse moving
  // const [position, setPosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  // const handlePosition = (e) => {
  //   setPosition({
  //     x: e.clientX,
  //     y: e.clientY,
  //   });
  // };
  // console.log("move", position);
  // i am writing state use because of state lifiting up method
  const [car, setCar] = useState([]);

  //  here we are deaclaring a function to call in child to send data from child to parent and recieving data here
  const parentFun = (childern) => {
    console.log("receive data from child :", childern);
  };
  return (
    <div
      className="p-10"
      // onPointerMove={handlePosition}
      // style={{
      //   position: "relative",
      //   width: "100dvw",
      //   height: "100dvh",
      // }}
    >
      <h2>UseState</h2>
      <div
        style={{
          // position: "absolute",
          // backgroundColor: "lightcyan",
          // borderRadius: "50% ",
          // height: "20px",
          // width: "20px",
          // left: "-10px",
          // right: "-10px",
          // transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <DerivedState setCar={setCar} car={car} parentFun={parentFun} />
      <StateLiftingUp car={car} />
      <UpdateObjectInState />
      <UpdateArrayInState />
    </div>
  );
}

export default UseState;
