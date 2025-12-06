import React, { useState } from "react";

function ParentEvent() {
  const [name, setName] = useState("Sam");
  const handleClear = () => {
    setName("");
  };
  return (
    <>
      <h2>ParentEvent</h2>
      <h3>I am going to use onChange envent to get there input value</h3>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        placeholder="name.."
        onChange={(e) => setName(e.target.value)}
      />
      <h2>{name}</h2>
      <button onClick={handleClear}>clear</button>
    </>
  );
}

export default ParentEvent;
