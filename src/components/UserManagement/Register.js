import React from "react";
import { createNewUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

function Register(props) {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(props.errors);
  }, [props.errors]);

  const onChange = (ev) => {
    switch (ev.target.name) {
      case "username":
        setUsername(ev.target.value);
        break;
      case "fullName":
        setFullName(ev.target.value);
        break;
      case "password":
        setPassword(ev.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(ev.target.value);
        break;
    }
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const newUser = {
      username: username,
      fullName: fullName,
      password: password,
      confirmPassword: confirmPassword,
    };

    props.createNewUser(newUser, props.history);
  };

  return (
    <div>
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Account</p>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classNames("form-control form-control-lg", {
                      "is-invalid": errors.fullName,
                    })}
                    placeholder="Full Name"
                    name="fullName"
                    value={fullName}
                    onChange={onChange}
                  />
                  {errors.fullName && (
                    <div className="invalid-feedback">{errors.fullName}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classNames("form-control form-control-lg mt-4", {
                      "is-invalid": errors.username,
                    })}
                    placeholder="Email Address (Username)"
                    name="username"
                    value={username}
                    onChange={onChange}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classNames("form-control form-control-lg mt-4", {
                      "is-invalid": errors.password,
                    })}
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classNames("form-control form-control-lg mt-4", {
                      "is-invalid": errors.confirmPassword,
                    })}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onChange}
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStatetoProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStatetoProps, { createNewUser })(Register);
