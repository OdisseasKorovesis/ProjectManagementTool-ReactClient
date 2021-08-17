import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/securityActions";

function Header(props) {
  const { validToken, user } = props.security;

  const userLogout = () => {
    props.logout();
    window.location.href = "/";
  };

  const userNotAuthenticated = (
    <div className="collapse navbar-collapse justify-content-end" id="mobile-nav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );

  const userIsAuthenticated = (
    <div className="collapse navbar-collapse justify-content-end" id="mobile-nav">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/dashboard">
            Dashboard
          </a>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-user-circle mr1" /> {user.fullName}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout" onClick={userLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );

  let headerLinks;

  if (validToken && user) {
    headerLinks = userIsAuthenticated;
  } else {
    headerLinks = userNotAuthenticated;
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Personal Project Management Tool
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {headerLinks}
      </div>
    </nav>
  );
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps, { logout })(Header);
