import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Backlog from "./Backlog";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../../actions/backlogActions";

function ProjectBoard(props) {
  const { id } = useParams();

  useEffect(() => {
    props.getBacklog(id);
  }, []);

  return (
    <div className="container">
      <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
        <i className="fas fa-plus-circle"> Create Project Task</i>
      </Link>
      <br />
      <hr />
      <Backlog project_tasks={props.backlog} />
    </div>
  );
}

ProjectBoard.propTypes = {
  backlog: PropTypes.object.isRequired,
  getBacklog: PropTypes.func.isRequired,
};

const mapStatetoProps = (state) => ({
  backlog: state.backlog,
});

export default connect(mapStatetoProps, { getBacklog })(ProjectBoard);
