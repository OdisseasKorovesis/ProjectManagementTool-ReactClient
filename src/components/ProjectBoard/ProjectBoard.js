import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Backlog from "./Backlog";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../../actions/backlogActions";

function ProjectBoard(props) {
  const [errors, setErrors] = useState({});

  const { id } = useParams();

  useEffect(() => {
    props.getBacklog(id);
  }, []);

  useEffect(() => {
    if (props.errors) {
      setErrors(props.errors);
    }
  }, [props]);

  let BoardContent;
  const project_tasks = props.backlog;

  const boardAlgorithm = (errors, project_tasks) => {
    if (project_tasks.project_tasks.length < 1) {
      if (errors.projectNotFound || errors.projectIdentifier) {
        return (
          <div className="alert alert-danger text-center" role="alert">
            {errors.projectNotFound ? errors.projectNotFound : errors.projectIdentifier}
          </div>
        );
      } else {
        return (
        <div className="alert alert-info text-center" role="alert">
          No project tasks on this board.
        </div>)
      }
    } else {
      return <Backlog project_tasks={props.backlog} />;
    }
  };

  BoardContent = boardAlgorithm(errors, project_tasks);

  return (
    <div className="container">
      <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
        <i className="fas fa-plus-circle"> Create Project Task</i>
      </Link>
      <br />
      <hr />
      {BoardContent}
    </div>
  );
}

ProjectBoard.propTypes = {
  backlog: PropTypes.object.isRequired,
  getBacklog: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStatetoProps = (state) => ({
  backlog: state.backlog,
  errors: state.errors,
});

export default connect(mapStatetoProps, { getBacklog })(ProjectBoard);
