import React from "react";

function UseForwardRefHook() {
    const code = `
    
                Before React 19 (using forwardRef)
jsx
import React, { forwardRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

// Usage in parent component remains the same
function App() {
  const inputRef = useRef(null);
           // ...
  return <MyInput ref={inputRef} />;
}
//   /////////////////////////////////////////////////////////////////////////
In React 19 (passing ref as a prop)
jsx
import React from 'react';

// Ref is now part of the props object
function MyInput(props) {
  return <input {...props} ref={props.ref} />;
}
  // Or using destructuring (with TypeScript example for clarity)
interface MyInputProps {
  placeholder: string;
  ref?: React.Ref<HTMLInputElement>;
}
const MyInput = ({ ref, placeholder }: MyInputProps) => (
  <input ref={ref} placeholder={placeholder} />
);

// Usage in parent component
function App() {
  const inputRef = useRef(null);
  // ...
  return <MyInput ref={inputRef} />;
} 
                
    `;
  return (
    <div className="bg-blue-300 p-10">
      UseForwardRefHook
      <p>
        basically it was using before 19 virsion because at that time we cann't
        pass the useRef input from parent to child we passed through the second
        parameter in the child function. But after 19v no need to use forwardRef
        because we can destructure as a standerd prop.{" "}
      </p>
          <pre>
              <code>
              {code}
              </code>
          </pre>
                  


    

     
                    
    </div>
  );
}

export default UseForwardRefHook;
