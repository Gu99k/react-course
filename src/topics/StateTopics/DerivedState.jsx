import React, { useState } from "react";
import Button from "../../component/Button/Button";
import Input from "../../component/Input/Input";

function DerivedState({ car, setCar, parentFun }) {
  const [caruser, setCarUser] = useState("");

  const handleInput = (e) => {
    setCarUser(e.target.value);
  };
  const handleAddCar = (e) => {
    e.preventDefault();
    setCar([...car, caruser]);
    setCarUser("");
  };
// this is the data sending process from child to parent
  parentFun("send from child");
  //   Now this is actual derive state because this value will get from existing state
  const total = car.length;
  const last = car[total - 1];
  const unique = [...new Set(car)].length;
  return (
    <div className="bg-orange-700 p-4 my-0 mx-auto">
      <h2 className="text-2xl">DerivedState</h2>
      <form onSubmit={handleAddCar}>
        <Input
          type="text"
          name="caruser"
          id="car"
          placeholder="Car Name..."
          value={caruser}
          onChange={handleInput}
        />
        <Button btn="Click" type="submit" />
      </form>

      <div>
        <h2>total no. of car = {total}</h2>
        <h2>adding last no. of car= {last}</h2>
        <h2>no. of total unique car= {unique}</h2>
      </div>
    </div>
  );
}

export default DerivedState;
