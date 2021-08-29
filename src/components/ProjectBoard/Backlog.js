import { useEffect } from "react";
import ProjectTask from "./ProjectTasks/ProjectTask";
import { updateProjectTask } from "../../actions/backlogActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useState } from "react";

function Backlog(props) {
  const { project_tasks } = props.project_tasks;

  const determineStatus = (element) => {
    const isToDo = Boolean(element.closest(".to_do"));
    const isInProgress = Boolean(element.closest(".in_progress"));
    const isDone = Boolean(element.closest(".done"));
    if (isToDo) {
      return "to_do";
    } else if (isInProgress) {
      return "in_progress";
    } else if (isDone) {
      return "done";
    }
  };

  const doDragEnter = (ev) => {
    ev.preventDefault();
    document.querySelector("." + determineStatus(ev.target)).style.boxShadow = " 5px 5px 15px 5px #000000";
    document.querySelector("." + determineStatus(ev.target)).style.padding = " 20px";
    document.querySelector("." + determineStatus(ev.target)).style.borderRadius = "25px";
  };

  const doDragOver = (ev) => {
    ev.preventDefault();
  };

  const doDrop = async (ev) => {
    const projectInfo = JSON.parse(ev.dataTransfer.getData("task"));
    const updatedProjectTask = {
      id: projectInfo.id,
      sequence: projectInfo.projectSequence,
      summary: projectInfo.summary,
      acceptanceCriteria: projectInfo.acceptanceCriteria,
      status: determineStatus(ev.target).toUpperCase(),
      priority: projectInfo.priority,
      dueDate: projectInfo.dueDate,
      identifier: projectInfo.identifier,
      createdAt: projectInfo.createdAt,
    };

    await props.updateProjectTask(
      props.identifier,
      projectInfo.projectSequence,
      updatedProjectTask,
      props.history
    );

    window.location.reload();
  };

  const doDragLeave = (ev) => {
    
    document.querySelector("." + determineStatus(ev.target)).style.boxShadow = "none";
    document.querySelector("." + determineStatus(ev.target)).style.padding = "none";
    document.querySelector("." + determineStatus(ev.target)).style.borderRadius = "none";
  };

  const doDragEnd = (ev) => {
    document.querySelector("." + determineStatus(ev.target)).style.boxShadow = "none";
    document.querySelector("." + determineStatus(ev.target)).style.padding = "none";
    document.querySelector("." + determineStatus(ev.target)).style.borderRadius = "none";
    
  };

  const tasks = project_tasks.map((project_task) => (
    <ProjectTask key={project_task.id} project_task={project_task} />
  ));

  let todoItems = tasks.filter(
    (task) => task.props.project_task.status === "TO_DO"
  );
  let inProgressItems = tasks.filter(
    (task) => task.props.project_task.status === "IN_PROGRESS"
  );
  let doneItems = tasks.filter(
    (task) => task.props.project_task.status === "DONE"
  );

  return (
    <div className="container">
      <div className="row">
        <div
          onDragLeave={doDragLeave}
          onDragOver={doDragEnter}
          onDragEnter={doDragOver}
          onDrop={doDrop}
          onDragEnd={doDragEnd}
          className="col-md-4 drop_area to_do"
        >
          <div className="card text-center mb-2">
            <div className="card-header bg-secondary text-white">
              <h3>TO DO</h3>
            </div>
          </div>
          {todoItems}
        </div>
        <div
          onDragLeave={doDragLeave}
          onDragOver={doDragEnter}
          onDragEnter={doDragOver}
          onDrop={doDrop}
          onDragEnd={doDragEnd}
          className="col-md-4 drop_area in_progress"
        >
          <div className="card text-center mb-2">
            <div className="card-header bg-primary text-white">
              <h3>In Progress</h3>
            </div>
          </div>
          {inProgressItems}
        </div>
        <div
          onDragLeave={doDragLeave}
          onDragOver={doDragEnter}
          onDragEnter={doDragOver}
          onDrop={doDrop}
          onDragEnd={doDragEnd}
          className="col-md-4 drop_area done"
        >
          <div className="card text-center mb-2">
            <div className="card-header bg-success text-white">
              <h3>Done</h3>
            </div>
          </div>
          {doneItems}
        </div>
      </div>
    </div>
  );
}

Backlog.propTypes = {
  updateProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStatetoProps = (state) => ({
  project_task: state.backlog.project_task,
  errors: state.errors,
});

export default connect(mapStatetoProps, { updateProjectTask })(Backlog);
