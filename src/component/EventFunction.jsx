import React from "react";
import Props from "./Props";

function EventFunction() {
  function myFun(params) {
    const name = "Ravikant";
    return name;
  }
  function myFunc(name) {
    alert(name);
    }
    const exData = [{ name: "bhintu" }, { name: "mintu" }, { name: "chintu" }];
  return (
    <>
      <div>EventFunction</div>
      <h1>{myFun()}</h1>
      <button onClick={() => myFunc("papaya")}>click me</button>
          <hr />
        
      <Props exData={exData} />
     
    </>
  );
}

export default EventFunction;
