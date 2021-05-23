import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from "../../actions/projectActions";

function ProjectItem(props) {
  const { project } = props;

  const onDeleteClick = (id) => {
    props.deleteProject(id);
  };

  return (
    <div className="container">
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <span className="mx-auto">{project.identifier}</span>
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
          <div className="col-md-4 d-none d-lg-block">
            <ul className="list-group">
              <a href="#">
                <li className="list-group-item board">
                  <i className="fa fa-flag-checkered pr-1"> Project Board </i>
                </li>
              </a>
              <Link to={`/updateProject/${project.identifier}`}>
                <li className="list-group-item update">
                  <i className="fa fa-edit pr-1"> Update Project Info</i>
                </li>
              </Link>
                <li className="list-group-item delete" onClick={() => onDeleteClick(project.identifier)}>
                  <i className="fa fa-minus-circle pr-1"> Delete Project</i>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  deleteProject: PropTypes.func.isRequired,
};

export default connect(null, { deleteProject })(ProjectItem);