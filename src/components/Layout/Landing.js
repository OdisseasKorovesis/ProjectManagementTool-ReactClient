import React from "react";
import { Link } from "react-router-dom";

function Landing() {
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
                <div className="row justify-content-around">
                  <Link to="/register" className="btn btn-lg btn-primary mr-4 col-2">
                    Sign Up
                  </Link>
                  <Link href="/login" className="btn btn-lg btn-secondary col-2">
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

export default Landing;
