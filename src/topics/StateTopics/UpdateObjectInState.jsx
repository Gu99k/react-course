import React, { useState } from "react";
import Button from "../../component/Button/Button";
import Input from "../../component/Input/Input";
import { useImmer } from "use-immer";

function UpdateObjectInState() {
  // when we single input
  // const [name, setName] = useState("samkaran");
  //  now we have multiple input data in a nested object just see how to update the full nested object
  const [data, setData] = useState({
    name: "Sam",
    score: 10,
    address: {
      city: "delhi",
      country: "india",
    },
  });

  const handleInputs = (e) => {
    let val1 = e.target.name;
    let val2 = e.target.value;
    setData({
      ...data,
      address: { ...data.address, [val1]: val2 },
      [val1]: val2,
    });
    console.log(e.target.value);
  };

  const handleButton = () => {
    setData((prevData) => ({ ...prevData, score: prevData.score++ })); //both working fine
    //  setData({...data, score:data.score+1})
  };

  //  Now the biggest question like there are big file of the nested object so how many time i will use spread operator that will be messy so to make safe clean and clear code you want to write then install use-immer library so no need to use spread operator!
  // so recomend this feature and this professional way!

  const [user, setUser] = useImmer({
    accountName: "",
    accountEmail: "",
    post: {
      postalCode: "",
    },
  });
  // we are targeting here top label object with immer use
  const handleInputImmer = (e) => {
    const targetN = e.target.name;
    const targetV = e.target.value;

    setUser((draft) => {
      //  this one targeting top label object
      // draft[targetN] = targetV;
      // this one targeting nested label object
      // draft.post[targetN] = targetV; // this code is working but not a good way coding it will be coause when expaind nested object And the right way to write code
      // console.log(targetN);

      const path = targetN.split(".");
      let copyObj = draft;

      for (let i = 0; i < path.length - 1; i++) {
        copyObj = copyObj[path[i]];
      }
      copyObj[path[path.length - 1]] = targetV;
    });
  };
  //   now if i want to display this nested object data in table or list tags so here we go
  //  take a storage state using immer

  const [list, setList] = useImmer([]);
  const addNestedObject = () => {
    setList((draft) => {
      draft.push(user);
    });
    setUser({
      accountName: "",
      accountEmail: "",
      post: {
        postalCode: "",
      },
    });
  };
  console.log(list);
  return (
    <div className="bg-orange-400 p-5">
      <h2 className="text-3xl">UpdateObjectInState</h2>
      <ul>
        <li className="list-disc">How to update object in state</li>
        <li>
          we will take object and nested object and see how will render the
          state
        </li>
      </ul>

      <Button btn="Update + 1" onClick={handleButton} />

      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleInputs}
        value={data.name}
      />

      {"      "}
      <Input
        type="text"
        name="city"
        placeholder="City"
        value={data.address.city}
        onChange={handleInputs}
      />
      {"      "}
      <Input
        type="text"
        name="country"
        placeholder="Country"
        value={data.address.country}
        onChange={handleInputs}
      />
      <p className="mt-3  p-4 text-xl text-blue-50">Count : {data.score}</p>
      <p className="mt-3  p-4 text-xl text-blue-50">Name : {data.name}</p>

      <p className="mt-3  p-4 text-xl text-blue-50">
        City : {data.address.city}
      </p>
      <p className="mt-3  p-4 text-xl text-blue-50">
        Country : {data.address.country}
      </p>
      <hr />
      <div>
        <h1 className="text-2xl pb-5">
          Fron here we will show the data of <b>'useImmer'</b>
        </h1>
        <Input
          type="text"
          name="accountName"
          placeholder="Account Name.."
          value={user.accountName}
          onChange={handleInputImmer}
        />

        {"      "}
        <Input
          type="text"
          name="accountEmail"
          placeholder="Account Email.."
          value={user.accountEmail}
          onChange={handleInputImmer}
        />
        {"      "}
        <Input
          type="text"
          name="post.postalCode"
          placeholder="Postal Code.."
          value={user.post.postalCode}
          onChange={handleInputImmer}
        />
        {"      "}

        <Button btn="Add" onClick={addNestedObject} />
        {/*   //////////   here i am displaying the data because that object i have stored in an array list using use-immer  */}
        {list.map((item, index) => (
          <div key={index}>
            <p className="mt-3  p-4 text-xl text-blue-50">
              Postal Code : {item.post.postalCode}
            </p>
            <p className="mt-3  p-4 text-xl text-blue-50">
              Account Name : {item.accountName}
            </p>

            <p className="mt-3  p-4 text-xl text-blue-50">
              Account Email : {item.accountEmail}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpdateObjectInState;
