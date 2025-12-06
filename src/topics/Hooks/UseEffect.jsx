import React, { useEffect } from "react";

function UseEffect({ mount, update, unmount }) {
  // useeffect how to work controll damages
  //   const [counter, setCounter] = useState(0);
  //   const [data, setData] = useState(0);

  //   useEffect(() => {
  //       callOne(console.log("only counter will update this function"));

  //   }, [counter]);

  //   function callOne() {
  //     console.log("i have called one time ", counter);
  //   }
  //  react lifecycle
  useEffect(() => {
    console.log("mounting phase only");
  }, []);
  useEffect(() => {
    console.log("updating phase only");
  }, [update]);
  useEffect(() => {
    console.log("born");

    return () => {
      console.log("");
    };
  }, []);

  return (
    <div className="p-10 mt-6 bg-amber-300 ">
      {/* <button
        onClick={() => setCounter(counter + 1)}
        className="bg-green-500 p-1 rounded-3xl text-2xl"
      >
        Counter : {counter}
      </button> */}
      {"  "}
      {/* <button
        onClick={() => setData(data + 1)}
        className="bg-blue-600 p-1 rounded-3xl text-2xl"
      >
        Data : {data}
      </button> */}
      unmount phase only
      <h1>Handleing dependency</h1>
      {/* {
              useEffect(() => {
                    // call for All time
              })
          }
          {
              useEffect(() => { 
                //   call for one time time
              }, [])
          
          }
          {
              useEffect(() => { 
                //   call for changing single state
              }, [state])
          
          }
          {
              useEffect(() => { 
                //   call for changing multiple state
              }, [state1, state2])
          
          }
          {
              useEffect(() => { 
                //   call on change props
              }, [props1, props2])
          
          } */}
      <h1>React LifeCycle </h1>
      <p> fistt Mount then update and then unmount </p>
      <p>handle error</p>
      <p>let's see the example of all parameter</p>
      <h2>Mount 1:- mount will render one time on display {mount}</h2>
      <h2>Update phase: {update}</h2>
      <h2>Unmount Phase: {unmount}</h2>
    </div>
  );
}

export default UseEffect;
