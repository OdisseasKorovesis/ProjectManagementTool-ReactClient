import React from "react";
import {Link} from 'react-router-dom'

function CreateProjectButton() {
  return (
    <Link to="/addProject" className="btn btn-lg btn-info mx-auto mx-md-0">
      Create a Project
    </Link>
  );
}

export default CreateProjectButton;
