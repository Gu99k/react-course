import React from "react";

function StateLiftingUp({ car }) {
  return (
    <div className="bg-yellow-400 p-5">
      <h2 className="text-2xl">StateLiftingUp</h2>
      <p>
        state lifting up basically there will be one parent component and two
        child components means two child so when we share a state data from one
        child to another child with the help of parent so it calls state lifting
        up.
      </p>
      <div>
        So we have a parent called UseSate.jsx and Two child i will send state
        data from derived state to state lifting up component
      </div>

      <div className="flex justify-between max-w-1/2  ">
        <div>
          {car.map((element, index) => (
            <div key={index} className="p-3 ">
              <p>{element}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StateLiftingUp;
