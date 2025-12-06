import React from "react";
import { useDataProvider } from "./ContextApi";


function Subject() {
 const book = useDataProvider()
  
  return (
    <div className="bg-red-400 p-4">
      <h2 className="font-bold">ContextApi</h2>
      <p>
        context api is a whole package to create Api. And we use this to avoid
        prop drinlling methods. because it will be global context. and we can
        send data from parent to any children or nested components directly.{" "}
      </p>
      <p>
        we will create the api in 3 part it will be a global sending data to
        each child directly
      </p>
      <ul className="list-disc">
        <li className="list-item isolate">CreateContext</li>
        <li>Provider</li>
        <li>useContext</li>
      </ul>
      <h2>
        Subjects name: <span className="text-white">{book}</span>
      </h2>
    </div>
  );
}

export default Subject;
