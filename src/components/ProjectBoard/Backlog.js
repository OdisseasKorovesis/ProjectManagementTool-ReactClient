import { useEffect } from "react";
import ProjectTask from "./ProjectTasks/ProjectTask";

function Backlog(props) {
  const { project_tasks } = props.project_tasks;
  console.log(props.project_tasks);

  const tasks = project_tasks.map((project_task) => (
    <ProjectTask key={project_task.id} project_task={project_task} />
  ));

  console.log(props.project_tasks);
  let todoItems = tasks.filter((task) => task.props.project_task.status === "TO_DO");
  let inProgressItems = tasks.filter((task) => task.props.project_task.status === "IN_PROGRESS");;
  let doneItems = tasks.filter((task) => task.props.project_task.status === "DONE");;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center mb-2">
            <div className="card-header bg-secondary text-white">
              <h3>TO DO</h3>
            </div>
          </div>
          {todoItems}
        </div>
        <div className="col-md-4">
          <div className="card text-center mb-2">
            <div className="card-header bg-primary text-white">
              <h3>In Progress</h3>
            </div>
          </div>
          {inProgressItems}
        </div>
        <div className="col-md-4">
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

export default Backlog;
