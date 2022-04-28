import React from "react";
import { Link } from "react-router-dom";
const PageHome = () => {
  return (
    <div>
      <h3>Link React Router DOM</h3>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default PageHome;
