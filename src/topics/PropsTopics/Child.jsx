import React from "react";

function Child({ name = "New User", user }) {
  return (
    <div>
      {/* <p>receive props from parent</p> */}
      <h2>Hi, {name}</h2>
      <h2>Hi, {user}</h2>
    </div>
  );
}

export default Child;
