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
          <div className="col-md-2 text-center">
            <span>{project.identifier}</span>
          </div>
          <div className="col-12 col-md-4 col-lg-6">
            <h3 className="text-center">{project.name}</h3>
            <p className="text-center">{project.description}</p>
          </div>
          <div className="col-md-6 col-lg-4">
            <ul className="list-group">
              <Link to={`/projectBoard/${project.identifier}`}>
                <li className="list-group-item board">
                  <i className="fa fa-flag-checkered pr-1"> Project Board </i>
                </li>
              </Link>
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
