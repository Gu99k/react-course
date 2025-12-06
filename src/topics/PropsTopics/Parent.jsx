import React from "react";
import Child from "./Child";

function Parent({ user }) {
  
 
  return (
    <>
      {/* <div>Parent</div> */}
      {/* <h1> Advance Props</h1> */}
      <div className="defaultProps">
        {/* <h3>default props</h3> */}
        <Child name="Ravi" user={user} />
        {/* <Child name='bhasker' /> */}
        {/* <Child />
              <Child />
              <Child /> */}
      </div>
      
    </>
  );
}

export default Parent;
