import React from "react";
import classes from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={`container mt-5 ${classes.container}`}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 p-4 mt-5">
          <div className={`${classes.whitediv} px-4 py-5 w-100 mt-5 border border-dark`}>
            <h5 className={classes.title}>Sign Up</h5>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Full Name"
                className="form-control mb-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="form-control mb-3"
              />
              <input
                type="password"
                placeholder="Password"
                className="form-control mb-3"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-control mb-3"
              />
            </div>
            <button className="btn btn-primary w-100">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
