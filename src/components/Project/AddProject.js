import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";
import classnames from "classnames";

function AddProject(props) {
  const [name, setName] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(props.errors);
  }, [props.errors]);

  const onChange = (ev) => {
    switch (ev.target.name) {
      case "name":
        setName(ev.target.value);
        break;
      case "identifier":
        setIdentifier(ev.target.value);
        break;
      case "description":
        setDescription(ev.target.value);
        break;
      case "startDate":
        setStartDate(ev.target.value);
        break;
      case "endDate":
        setEndDate(ev.target.value);
        break;
    }
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const newProject = {
      name: name,
      identifier: identifier,
      description: description,
      startDate: startDate,
      endDate: endDate,
    };

    props.createProject(newProject, props.history);
  };

  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h5 className="display-4 text-center">Create Project form</h5>
            <hr />
            <form onSubmit={onSubmit}>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.name,
                  })}
                  placeholder="Project Name"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.identifier,
                  })}
                  placeholder="Unique Project ID"
                  name="identifier"
                  value={identifier}
                  onChange={onChange}
                />
                {errors.identifier && (
                  <div className="invalid-feedback">{errors.identifier}</div>
                )}
              </div>
              <div className="form-group mt-3">
                <textarea
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.description,
                  })}
                  placeholder="Project Description"
                  name="description"
                  value={description}
                  onChange={onChange}
                ></textarea>
                {errors.description && (
                  <div className="invalid-feedback">{errors.description}</div>
                )}
              </div>
              <h6 className="mt-3">Start Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.startDate,
                  })}
                  name="startDate"
                  value={startDate}
                  onChange={onChange}
                />
                {errors.startDate && (
                  <div className="invalid-feedback">{errors.startDate}</div>
                )}
              </div>
              <h6 className="mt-3">Estimated End Date</h6>
              <div className="form-group">
                <input
                  type="date"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.endDate,
                  })}
                  name="endDate"
                  value={endDate}
                  onChange={onChange}
                />
                {errors.endDate && (
                  <div className="invalid-feedback">{errors.endDate}</div>
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

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createProject })(AddProject);
