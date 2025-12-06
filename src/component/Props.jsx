import React from "react";

function Props({ exData }) {
  //   const itemData = {
  //     name: "ravikant",
  //     email: "ravi986745@gmail.com",
  //   };

  //   const itemData = "hello";

  return (
    <>
      <div>Props</div>

      {/* Hello {props.name} */}
      {/* iteData :{itemData.name} and {itemData.email} */}

      {exData.map((item, index) => (
        <h2 key={index}>Hello {item.name}</h2>
      ))}
    </>
  );
}

export default Props;
