import React from "react";
import { Link } from "react-router-dom";
function NotAuthenticated() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">Restricted Page!!</h1>
          <p className="fs-3">
            {" "}
            <span className="text-danger">Whoa!</span> Hold Up....
          </p>
          <p className="lead">Seems like you haven't logged in yet.</p>
          <Link to="/login" className="btn btn-primary">
            Login Here First
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotAuthenticated;
