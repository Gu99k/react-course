import React, { useActionState } from "react";
import Input from "../../component/Input/Input";
import Button from "../../component/Button/Button";

function UseActionState() {

  let initialData = {
    username:""
  }
  const handleInput = async (prevState, formData) => {
    "use server";
    let username = formData.get("name");

    
    if (!username) {
      return { error: "fill the name" };
    }
    await new Promise((res) => setTimeout(res, 1000));
    return { message: "submitted successfully", username };
  };
  const [state, action, isPending] = useActionState(handleInput, initialData);
  console.log(state);
  return (
    <div>
      <h2>UseActionState</h2>
      <form action={action}>
        <Input
          type="text"
          // defaultValue={state.username}
          name="name"
          placeholder="Name"
        />
        <Button btn="Action" type="submit" disabled={isPending} />
      </form>
      {state?.error && <span className="text-red-600">{state?.error}</span>}
      {state?.message && (
        <span className="text-green-500">{state?.message}</span>
      )}
      <p>{state.username}</p>
    </div>
  );
}

export default UseActionState;
