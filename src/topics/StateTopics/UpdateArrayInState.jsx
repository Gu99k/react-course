import React, { use, useState } from "react";
import Button from "../../component/Button/Button";

function UpdateArrayInState() {
  const [user, setUser] = useState([
    { id: 1, name: "ravi", email: "ddhxj@gmail.com", contact: "86u5868954u89" },
  ]);
  const UpdateArray = () => {
    setUser([{ ...user, name: "SAm", id: 2, email:"ravi@gmail.com", contact:"689786786889"}]);
  };
  console.log(user);
  return (
    <div>
      <h2>UpdateArrayInState</h2>
      <Button btn="Update array" onClick={UpdateArray} />
      {user.map((item, index) => (
        <div key={index}>
          <p>Id : {item.id}</p>
          <p>Name : {item.name}</p>
          <p>Email : {item.email}</p>
          <p>Contact : {item.contact}</p>
        </div>
      ))}
    </div>
  );
}

export default UpdateArrayInState;
