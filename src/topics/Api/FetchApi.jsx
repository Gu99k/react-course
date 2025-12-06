import React, { useEffect, useState } from "react";

function FetchApi() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function myApi() {
      try {
        const response = await fetch(url);
       

        if (!response.ok) {
          throw new Error("server error");
        }
        const resData = await response.json();
        setUser(resData);
      } catch (error) {
        console.log("errors");
      } finally {
        setLoading(false);
      }
    }

    myApi();
  }, []);
  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {user.map((item) => {
          return (
            <li key={item.id}>
              {item.id}
              {""}
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FetchApi;
