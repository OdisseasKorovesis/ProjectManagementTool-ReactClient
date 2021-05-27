import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import { addProjectTask } from "../../../actions/backlogActions";
import PropTypes from "prop-types";

function AddProjectTask(props) {
  const { id } = useParams();

  const [summary, setSummary] = useState("");
  const [acceptanceCriteria, setAcceptanceCriteria] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState(0);
  const [dueDate, setDueDate] = useState("");
  const [projectIdentifier, setProjectIdentifier] = useState(id);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(props.errors);
  }, [props.errors]);

  const onChange = (ev) => {
    switch (ev.target.name) {
      case "summary":
        setSummary(ev.target.value);
        break;
      case "acceptanceCriteria":
        setAcceptanceCriteria(ev.target.value);
        break;
      case "status":
        setStatus(ev.target.value);
        break;
      case "priority":
        setPriority(ev.target.value);
        break;
      case "dueDate":
        setDueDate(ev.target.value);
        break;
    }
  };

  const onSumbit = (ev) => {
    ev.preventDefault();
    const newTask = {
      summary: summary,
      acceptanceCriteria: acceptanceCriteria,
      status: status,
      priority: priority,
      dueDate: dueDate,
    };
    props.addProjectTask(projectIdentifier, newTask, props.history);
  };

  return (
    <div className="add-PBI">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to={`/projectBoard/${id}`} className="btn btn-light">
              Back to Project Board
            </Link>
            <h4 className="display-4 text-center">Add Project Task</h4>
            <p className="lead text-center">Project Name + Project Code</p>
            <form onSubmit={onSumbit}>
              <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.summary,
                  })}
                  name="summary"
                  value={summary}
                  onChange={onChange}
                  placeholder="Project Task summary"
                />
                {errors.summary && (
                  <div className="invalid-feedback">{errors.summary}</div>
                )}
              </div>
              <div className="form-group mt-3">
                <textarea
                className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.acceptanceCriteria,
                  })}
                  placeholder="Acceptance Criteria"
                  name="acceptanceCriteria"
                  value={acceptanceCriteria}
                  onChange={onChange}
                ></textarea>
                {errors.acceptanceCriteria && (
                    <div className="invalid-feedback">{errors.acceptanceCriteria}</div>
                  )}
              </div>
              <h6 className="mt-3">Due Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.dueDate,
                  })}
                  name="dueDate"
                  value={dueDate}
                  onChange={onChange}
                />
                {errors.dueDate && (
                    <div className="invalid-feedback">{errors.dueDate}</div>
                  )}
              </div>
              <div className="form-group mt-3">
                <select
                className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.priority,
                  })}
                  name="priority"
                  value={priority}
                  onChange={onChange}
                >
                  <option value={0}>Select Priority</option>
                  <option value={1}>High</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Low</option>
                </select>
                {errors.priority && (
                    <div className="invalid-feedback">{errors.priority}</div>
                  )}
              </div>

              <div className="form-group mt-3">
                <select
                className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.status,
                  })}
                  name="status"
                  value={status}
                  onChange={onChange}
                >
                  <option value="">Select Status</option>
                  <option value="TO_DO">TO DO</option>
                  <option value="IN_PROGRESS">IN PROGRESS</option>
                  <option value="DONE">DONE</option>
                </select>
                {errors.status && (
                    <div className="invalid-feedback">{errors.status}</div>
                  )}
              </div>

              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

AddProjectTask.propTypes = {
  addProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { addProjectTask })(AddProjectTask);
