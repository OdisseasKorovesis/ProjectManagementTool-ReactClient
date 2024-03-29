import React from "react";
import { Link } from "react-router-dom";
import { deleteProjectTask } from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ProjectTask(props) {
  const project_task = props.project_task;

  const doDragStart = (ev) => {
    ev.dataTransfer.setData('task', JSON.stringify(project_task));
  }


  let priorityString;
  let priorityClass;

  if (project_task.priority === 1) {
    priorityClass = "bg-danger text-light";
    priorityString = "HIGH";
  } else if (project_task.priority === 2) {
    priorityClass = "bg-warning text-light";
    priorityString = "MEDIUM";
  } else {
    priorityClass = "bg-info text-light";
    priorityString = "LOW";
  }

  const onDeleteClick = (backlog_id, pt_id) => {
    props.deleteProjectTask(backlog_id, pt_id);
  };

  return (
    <div draggable="true" onDragStart={doDragStart} className="card mb-1 bg-light">
      <div className={`card-header text-primary ${priorityClass}`}>
        ID: {project_task.projectSequence} -- Priority: {priorityString}
      </div>
      <div className="card-body bg-light">
        <h5 className="card-title">{project_task.summary}</h5>
        <p className="card-text text-truncate ">
          {project_task.acceptanceCriteria}
        </p>
        <Link
          to={`/updateProjectTask/${project_task.identifier}/${project_task.projectSequence}`}
          className="btn btn-primary"
        >
          View / Update
        </Link>

        <button
          className="btn btn-danger ml-4"
          onClick={() => onDeleteClick(
            project_task.identifier,
            project_task.projectSequence
          )}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

ProjectTask.propTypes = {
  deleteProjectTask: PropTypes.func.isRequired,
};

export default connect(null, { deleteProjectTask })(ProjectTask);
