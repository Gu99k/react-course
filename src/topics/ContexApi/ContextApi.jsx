import React, { createContext, useContext, useState } from "react";
const UserContext = createContext(null);

function ContextApi({ children }) {
  const [book, setBook] = useState("Physics");
  // console.log(book);

  return (
    <>
      <UserContext.Provider value={[book, setBook]}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export default ContextApi;
export const useDataProvider = () => useContext(UserContext);
