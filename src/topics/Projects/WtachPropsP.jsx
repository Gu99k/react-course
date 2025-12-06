import React, { useEffect, useState } from "react";
import WatchPropsC from "./WatchPropsC";


function WtachPropsP() {
  //  const date = new Date();          this code is working but this is simple js code
  //  const hrsDate = date.getHours();
  //  const minDate = date.getMinutes();
  //  const secDate = date.getSeconds();
  //  const time = `${date} = ${hrsDate} : ${minDate} : ${secDate}`;

  //   Now here for Time react code use stateHooks method:-
  const [time, setTime] = useState(0);

  useEffect(() => {
    const setInt = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(setInt);
    };
  }, []);

  const [color, setColor] = useState("");
  const handleColor = (event) => {
    setColor(event.target.value);
    console.log(event.target.value);
  };



 
  
 

  return (
    <div className="text-center pt-8">
      <label htmlFor="color" className="font-bold text-3xl">
        Choose Your Color :{" "}
      </label>
      <select
        name="color"
        id="color"
        onChange={handleColor}
        className="text-3xl bg-gray-300 rounded-2xl"
      >
        <option color="red" value="Red">
          Red
        </option>
        <option color="green" value="Green">
          Green
        </option>
        <option color="blue" value="Blue">
          Blue
        </option>
        <option color="violet" value="Violet">
          Violet
        </option>
      </select>
      {/* <h2 style={{ color: color }}>{time}</h2> */}
      <div>
        <WatchPropsC time={time} color={color}/>
      </div>
    </div>
  );
}

export default WtachPropsP;
