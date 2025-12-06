import React, { useEffect, useState } from "react";
import UlList from "./UlList";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [text, setText] = useState("");
  const [feedback, setFeedBack] = useState("");
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("viteTodos");
    return saveTodos ? JSON.parse(saveTodos) : [];
  });
  const AddTodo = () => {
    if (!text) {
      return alert("Please write your item name");
    }
    const newTodoList = {
      id: uuidv4(),
      item: text,
      done: false,
      description: feedback,
    };

    setTodos([...todos, newTodoList]);
    setText("");
    setFeedBack("");
  };
  const readData = (dataId) => {
    const handleRead = todos.map((data) => {
      if (data.id === dataId) {
       
        return { ...data, done: !data.done };
      }
      return data;
      
    });
    setTodos(handleRead);
  };
  const DeleteData = (dataId) => {
    const handleDelete = todos.filter((data) => data.id !== dataId);
    const conformDelete = confirm("you wanna realy delete");
    if (!conformDelete) {
      return alert("your data is safe!");
    }
    setTodos(handleDelete);
    alert("Deleted Successfully");
  };

  useEffect(() => {
    localStorage.setItem("viteTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="h-screen lg:flex  bg-orange-200  p-8 ">
      <div className="flex flex-col w-1/2 mx-12">
        <div className="py-7 font-bold text-5xl mb-4 ">Add List Item </div>
        <input
          type="text"
          name="item"
          id="item"
          value={text}
          placeholder="Item..."
          onChange={(e) => setText(e.target.value)}
          className="bg-gray-300 border border-solid rounded-sm p-1"
        />
        <br />
        <textarea
          name="description"
          id="description"
          value={feedback}
          placeholder="Write your description here..."
          onChange={(e) => setFeedBack(e.target.value)}
          className="bg-gray-300 border border-solid rounded-sm p-1 min-h-52"
        >
          give your description...
        </textarea>
        <br />
        <button
          onClick={AddTodo}
          className="p-1 cursor-pointer bg-amber-700 rounded-sm border border-solid text-white font-bold text-4xl "
        >
          +
        </button>
      </div>
      <div className="w-1/2">
        {todos.length > 0 ? (
          // passing function as a props
          <UlList todos={todos} deleteData={DeleteData} readData={readData} />
        ) : null}
      </div>
    </div>
  );
}

export default TodoList;
