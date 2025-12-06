import React, { useState } from "react";
import { validate } from "uuid";

function HandleCheckBox() {
  const [skills, setsKills] = useState([]);
  const handleInput = (e) => {
    console.log(e.target.value);
    if (e.target.checked) {
      setsKills([...skills, e.target.value]);
    } else {
      setsKills([...skills.filter((item) => item != e.target.value)]);
    }
  };
  return (
    <>
      <div className="bg-blue-300 text-left p-7">
        <h3 className="font-bold pb-10">HandleCheckBox</h3>
        <hr />
        <div className="flex flex-col ">
          <label htmlFor="php">Php</label>
          <input
            type="checkbox"
            name="php"
            id="php"
            value="php"
            
            onChange={handleInput}
          />
          <br />
          <hr />
          <label htmlFor="javascript">JavaScript</label>
          <input
            type="checkbox"
            name="javascript"
            id="javascript"
            value="javascript"
            onChange={handleInput}
          />
          <br />
          <hr />
          <label htmlFor="node.js">Node.js</label>
          <input
            type="checkbox"
            name="node.js"
            id="node.js"
            value="node.js"
            onChange={handleInput}
          />
          <br />
          <hr />
          <label htmlFor="react.js">React.js</label>
          <input
            type="checkbox"
            name="react.js"
            id="react.js"
            value="react.js"
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="flex gap-10 bg-violet-900 text-cyan-50 p-7 text-2xl capitalize">
        {skills.map((item, idx) => (
          <h2 key={idx}>{item}</h2>
        ))}
      </div>
    </>
  );
}

export default HandleCheckBox;
