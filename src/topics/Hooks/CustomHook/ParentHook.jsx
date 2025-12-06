import React from "react";
import useToggleHook from "./useToggleHook";
import Button from "../../../component/Button/Button";

function ParentHook() {
  const [value, toggleValue] = useToggleHook(true);
  const [data, setData] = useToggleHook(true);
  console.log("get boolean", value);
  return (
    <div className="bg-sky-400 p-3">
      <h2 className="text-3xl bg-blue-950 text-cyan-50 p-1">ParentHook For Custom Hook Uses</h2>
      <Button btn="Display" onClick={toggleValue} tog={value} />
      <Button btn="Hide paragraph" onClick={() => toggleValue(false)} />
      <Button btn="Show paragraph" onClick={() => toggleValue(true)} />

      {value ? <p>This is a parent component to use custom hooks</p> : null}
      <hr />
      <Button btn="Display" onClick={setData} tog={value} />
      <Button btn="Hide paragraph" onClick={() => setData(false)} />
      <Button btn="Show paragraph" onClick={() => setData(true)} />

      {data ? (
        <p>
          This is a parent second paragraph to reuse component to use custom
          hooks
        </p>
      ) : null}
    </div>
  );
}

export default ParentHook;
