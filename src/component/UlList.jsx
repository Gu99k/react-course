import React, { useEffect, useState, useTransition } from "react";
import { CheckCircleIcon, TrashIcon, XCircleIcon } from "@phosphor-icons/react";

function UlList({ todos, deleteData, readData }) {
  const [search, setSearch] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const handleSearh = (e) => {
    const value = e.target.value;
    setSearch(value);

    const text = String(value).trim().toLowerCase();
    const textSearch = text.replace(/\s+/g, " ");
    startTransition(() => {
      const filtered = todos.filter((itemtodo) => {
        const matchTodosData = String(itemtodo.item).toLowerCase();
        const match = String(itemtodo.description).toLowerCase();
        return (
          matchTodosData.includes(textSearch) || match.includes(textSearch)
        );
      });
      setFilteredTodos(filtered);
    });
  };

  return (
    <>
      <div className="mb-4 py-7 max-[1120px]:flex max-[1120px]:flex-col">
        <span className=" font-bold text-4xl ">List Item Container</span>
        <span className=" pl-2 ml-7">
          <input
            type="text"
            name="search"
            placeholder="search"
            value={search}
            onChange={handleSearh}
            className="bg-gray-300 border ml-4  border-solid rounded-sm p-1 text-xl font-serif "
          />
        </span>
      </div>
      <ul className="flex flex-wrap gap-3">
        {isPending ? <p>Loading</p> : null}
        {filteredTodos.map((data) => (
          <li
            key={data.id}
            className="flex  justify-between flex-col p-4 text-left h-76 w-50 bg-center bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] rounded-2xl"
          >
            <div className="pt-3 ">
              {data.done ? (
                <div>
                  <h3 className="line-through ">{data.item} </h3>
                  <p className="line-through ">{data.description}</p>
                </div>
              ) : (
                <div>
                  <h3>{data.item}</h3> <p>{data.description}</p>
                </div>
              )}
            </div>
            <div className="flex justify-between ">
              <button
                onClick={() => readData(data.id)}
                className="cursor-pointer"
              >
                {data.done ? (
                  <XCircleIcon size={32} color="red" />
                ) : (
                  <CheckCircleIcon size={32} />
                )}
              </button>

              <button
                onClick={() => deleteData(data.id)}
                className="cursor-pointer"
              >
                <TrashIcon size={32} color="red" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UlList;
