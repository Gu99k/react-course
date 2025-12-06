import React from "react";

function Input({ type, name, placeholder, onChange, value, defaultValue }) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className="bg-gray-300 border-1 rounded-md p-1"
      />
    </>
  );
}

export default Input;
