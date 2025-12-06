import React, { useTransition } from "react";
import Button from "../../component/Button/Button";

function UseTransform() {
  const [isPending, startTransition] = useTransition();
  const handleButton = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
      console.log("useTranstion");
    });
  };

  return (
    <div className="bg-violet-500 text-center display-inline p-3 mb-20">
      <h2 className="font-bold text-2xl  ">UseTransition</h2>
      {/* {isPending ? "loading..." : null} */}
      <Button
        type="text"
        btn="Click"
        onClick={handleButton}
        disabled={isPending}
      />
    </div>
  );
}

export default UseTransform;
