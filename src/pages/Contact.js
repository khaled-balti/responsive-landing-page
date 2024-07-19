import React from "react";
import { FaGlobeAmericas, FaPhoneAlt,  } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-6 p-4 mt-5">
          <div className={`${classes.whitediv} p-4 border border-dark`}>
            <h5 className={classes.title}>Get in touch</h5>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Name"
                className="form-control mb-3"
              />
              <input
                type="text"
                placeholder="Email"
                className="form-control mb-3"
              />
              <input
                type="text"
                placeholder="Subject"
                className="form-control mb-3"
              />
              <textarea
                className="form-control mb-3"
                placeholder="Message"
                rows="5"
              ></textarea>
            </div>
            <button className="btn btn-primary w-100">Send message</button>
          </div>
        </div>
        <div className="col-12 col-lg-6 p-4 mt-5">
          <div className={`${classes.bluediv} text-white p-4`}>
            <h5 className="mb-4">Contact Us</h5>
            <div className="d-flex align-items-center mb-4 mt-5">
              <span className="me-3 d-flex justify-content-center align-items-center bg-primary rounded-circle" style={{ width: "50px", height: "50px" }}>
                <FaLocationDot />
              </span>
              <p className="mb-0">
                <strong>Address:</strong> 198 West 21th street
              </p>
            </div>
            <div className="d-flex align-items-center mb-4">
              <span className="me-3 d-flex justify-content-center align-items-center bg-primary rounded-circle" style={{ width: "50px", height: "50px" }}>
                <FaPhoneAlt />
              </span>
              <p className="mb-0">
                <strong>Phone:</strong> + 1235 2355 98
              </p>
            </div>
            <div className="d-flex align-items-center mb-4">
              <span className="me-3 d-flex justify-content-center align-items-center bg-primary rounded-circle" style={{ width: "50px", height: "50px" }}>
                <IoSend />
              </span>
              <p className="mb-0">
                <strong>Email:</strong> info@yoursite.com
              </p>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-3 d-flex justify-content-center align-items-center bg-primary rounded-circle" style={{ width: "50px", height: "50px" }}>
                <FaGlobeAmericas />
              </span>
              <p className="mb-0">
                <strong>Website:</strong> yoursite.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
