import React, { useState } from "react";

function useToggleHook(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (val) => {
    if (typeof val != "boolean") {
      setValue(!value);
    } else {
      setValue(val);
    }
  };

  return [value, toggleValue];
}

export default useToggleHook;
