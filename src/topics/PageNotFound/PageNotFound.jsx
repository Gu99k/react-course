import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  const st = {
    margin: "auto",
    cursor: "pointer",
  };

  return (
    <div>
      <img
        style={st}
        src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-page-not-found-3702346-3119137.png"
        alt="404page"
        onClick={() => navigate("/")}
      />
    </div>
  );
}

export default PageNotFound;
