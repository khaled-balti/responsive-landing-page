import React from "react";
import classes from "./Services.module.css";
import { PiNumberSquareOne } from "react-icons/pi";
import { PiNumberSquareTwo } from "react-icons/pi";
import { PiNumberSquareThree } from "react-icons/pi";

const Services = () => {
  return (
    <div className={`container mt-5 ${classes.container}`}>
      <h2 className={`text-center mb-5 ${classes.title}`}>Our Services</h2>
      <div className="row">
        <div className="col-12 col-md-4 mb-4">
          <div className={`${classes.serviceCard} p-4 mt-5`}>
            <p className="text-center"><PiNumberSquareOne color="#aaa" size={200}/></p>
            <h3 className={classes.serviceTitle}>Web Development</h3>
            <p className={classes.serviceDescription}>
              We build modern, responsive websites tailored to your business needs. From custom web applications to e-commerce solutions, we ensure a seamless user experience and robust performance.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div className={`${classes.serviceCard} p-4 mt-5`}>
            <p className="text-center"><PiNumberSquareTwo size={200} color="#aaa" /></p>
            <h3 className={classes.serviceTitle}>SEO Optimization</h3>
            <p className={classes.serviceDescription}>
              Improve your website’s visibility on search engines with our SEO services. We optimize your site’s content and structure to increase organic traffic and drive better results.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div className={`${classes.serviceCard} p-4 mt-5`}>
            <p className="text-center"><PiNumberSquareThree size={200} color="#aaa" /></p>
            <h3 className={classes.serviceTitle}>Digital Marketing</h3>
            <p className={classes.serviceDescription}>
              Expand your online presence with our digital marketing strategies. We offer targeted advertising, content creation, and social media management to boost your brand’s reach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
