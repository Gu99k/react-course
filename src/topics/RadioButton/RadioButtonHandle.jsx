import React, { useState } from "react";

function RadioButtonHandle() {
  const [gender, setGender] = useState("female");

  const handleRadioButton = (e) => {
    if (e.target.checked) {
      setGender(e.target.value);
    }

    // console.log(e.target.value, "yeschecked");
    // console.log(e.target.checked, "checked");
  };
  const [city, setCity] = useState("gurgaon")
  const HandleDropDown = (event) => {
    setCity(event.target.value)
  }
 

  return (
    <div className="bg-amber-600 h-screen p-8">
      <h2 className="text-center font-bold text-3xl">
        Handle Radio And DropDown Button!
      </h2>
      <div>
        <h1>Select Zender</h1>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="zender"
          id="male"
          value="male"
          checked={gender === "male"}
          onChange={handleRadioButton}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="zender"
          id="female"
          value="female"
          checked={gender === "female"}
          onChange={handleRadioButton}
        />
      </div>
      <div>
        <h2>Selected Gender: {gender}</h2>
      </div>
      <div>
        <label htmlFor="city">Choose Your City : </label>
        <select
          name="city"
          id="city"
          defaultValue={"Gurgaon"}
          className="bg-gray-400"
          onChange={HandleDropDown}
        >
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Gurgaon">Gurgaon</option>
        </select>
      </div>
      <div><h2>Selected City : { city}</h2></div>
      
    </div>
  );
}

export default RadioButtonHandle;
