import React, { useState } from "react";
import UseEffect from "./UseEffect";
import UseForwardRefHook from "./UseForwardRefHook";
import UseFormStatus from "./UseFormStatus";
import UseTransition from "./UseTransition";
import UseActionState from "./UseActionState";
import ParentHook from "./CustomHook/ParentHook";


function Hooks() {
  const [mount, setMount] = useState(0);
  const [update, setUpdate] = useState(0);
  const [unmount, setUnmount] = useState(true);

  const myMount = () => {
    setMount(mount + 1);
  };
  const myUpdate = () => {
    setUpdate(update + 1);
  };
  const myUnMount = () => {
    setUnmount(!unmount);
  };

  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl ">Hooks</h1>
      <button onClick={myMount}>Mount</button>
      <br />
      <button onClick={myUpdate}>Mpdate</button>
      <br />
      <button onClick={myUnMount}>Unmount</button>
      <UseEffect mount={mount} update={update} />
      {unmount ? <UseEffect unmount={unmount} /> : null}
      <UseForwardRefHook />
      <UseFormStatus />
      <UseTransition />
      <UseActionState />
      <ParentHook />
     
    </div>
  );
}

export default Hooks;
