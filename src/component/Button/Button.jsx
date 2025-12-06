import React from "react";

function Button({ type, btn, onClick, disabled, tog }) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className="bg-violet-300 border-2 rounded-2xl m-3 px-5 text-lg cursor-pointer hover:bg-blue-700 hover:scale-110 transition duration-300 ease-in-out"
      >
        {/* {disabled ? "loading..." : btn} */}
        {tog ? "Remove" : btn}
      </button>
    </>
  );
}

export default Button;
