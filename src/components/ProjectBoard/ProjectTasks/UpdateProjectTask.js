import { useEffect } from "react";
import { connect } from "react-redux";
import { classnames } from "classnames";
import { getProjectTask } from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function UpdateProjectTask(props) {
  const { id, sequence } = useParams();

  useEffect(() => {
    props.getProjectTask(id, sequence, props.history);
  }, []);

  return (
    <div className="add-PBI">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <a href="#" className="btn btn-light">
              Back to Project Board
            </a>
            <h4 className="display-4 text-center">Update Project Task</h4>
            <p className="lead text-center">Project Name + Project Code</p>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="summary"
                  placeholder="Project Task summary"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control form-control-lg mt-3"
                  placeholder="Acceptance Criteria"
                  name="acceptanceCriteria"
                ></textarea>
              </div>
              <h6 className="mt-3">Due Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="dueDate"
                />
              </div>
              <div className="form-group mt-3">
                <select
                  className="form-control form-control-lg"
                  name="priority"
                >
                  <option value={0}>Select Priority</option>
                  <option value={1}>High</option>
                  <option value={2}>Medium</option>
                  <option value={3}>Low</option>
                </select>
              </div>

              <div className="form-group mt-3">
                <select className="form-control form-control-lg" name="status">
                  <option value="">Select Status</option>
                  <option value="TO_DO">TO DO</option>
                  <option value="IN_PROGRESS">IN PROGRESS</option>
                  <option value="DONE">DONE</option>
                </select>
              </div>

              <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

UpdateProjectTask.propTypes = {
  getProjectTask: PropTypes.func.isRequired,
  project_task: PropTypes.object.isRequired,
};

const mapStatetoProps = (state) => ({
  project_task: state.backlog.project_task,
});

export default connect(null, { getProjectTask })(UpdateProjectTask);
