import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  const st = {
    margin: "auto",
  };

  return (
    <div>
      <Link to="/">
        <img
          style={st}
          src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-page-not-found-3702346-3119137.png"
          alt="404page"
        />
      </Link>
    </div>
  );
}

export default PageNotFound;
