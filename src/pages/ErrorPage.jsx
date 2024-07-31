import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>THis page do not exist 404</h1>
      <Link to={"/login"}>Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
