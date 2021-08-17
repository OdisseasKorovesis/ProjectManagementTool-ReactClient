import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useEffect } from "react";

function Landing(props) {
  useEffect(() => {
    if (props.security.validToken) {
      props.history.push("/dashboard");
    }
  }, [props.security]);

  return (
    <div>
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">
                  Personal Project Management Tool
                </h1>
                <p className="lead">
                  Create your account to join active projects or start your own
                </p>
                <hr />
                <div className="row flex-column flex-md-row justify-content-md-around">
                  <Link
                    to="/register"
                    className="btn btn-lg btn-primary mr-4 col-8 col-md-2 mx-auto mx-md-0 mb-2 mb-md-0"
                  >
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-secondary col-8 col-md-2 mx-auto mx-md-0">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Landing.propTypes = {
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps)(Landing);
