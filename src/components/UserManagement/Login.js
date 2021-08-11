import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { login } from "../../actions/securityActions";
import { useState, useEffect } from "react";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (props.security.validToken) {
      props.history.push("/dashboard");
    }
  }, [props.security]);

  useEffect(() => {
    setErrors(props.errors);
  }, [props.errors]);

  const onChange = (ev) => {
    switch (ev.target.name) {
      case "username":
        setUsername(ev.target.value);
        break;
      case "password":
        setPassword(ev.target.value);
        break;
    }
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const LoginRequest = {
      username: username,
      password: password,
    };

    props.login(LoginRequest);
  };

  return (
    <div>
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classNames("form-control form-control-lg mt-4", {
                      "is-invalid": errors.username,
                    })}
                    placeholder="Username"
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
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
  errors: state.errors,
});

export default connect(mapStateToProps, { login })(Login);
