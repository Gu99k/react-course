import React from "react";
import { useFormStatus } from "react-dom";

function UseFormStatus() {
  const submit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("submitted");
  };
  const Form = () => {
    const { pending } = useFormStatus();

    return (
      <div >
        <input
          type="text"
          name=""
          id=""
          placeholder="form handle"
          className="border-2 border-solid "
          
        />
        <button type="submit" disabled={pending} className="border-2 border-solid">
          {pending ? "submitting..." : "submit"}
        </button>
      </div>
    );
  };

  return (
    <div className="bg-green-300 p-10">
      UseFormStatus
      <p>
        use form status we use to show if form is going to submit and taking
        some time so at that time we shall use to show like form is
        submitting...{" "}
      </p>
      <p>
        and the rule is to apply useformsattus that should be inside the form
        area
      </p>
      <form action={submit}>
        <Form />
      </form>
    </div>
  );
}

export default UseFormStatus;
