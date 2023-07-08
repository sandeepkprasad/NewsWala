import React from "react";

const About = (props) => {
  return (
    <div className="container d-flex justify-content-center">
      <div
        className={`card text-bg-${props.mode} mb-3`}
        style={{ width: "50rem", marginTop: "80px" }}
      >
        <div className="card-header">NewsWala</div>
        <div className="card-body">
          <h5 className="card-title">About</h5>
          <p className="card-text">
            NewsWala is a news application developed in ReactJS library and
            using NewsAPI. The application is developed as personal project by
            Sandeep Kumar.
          </p>
          <p className="card-text">
            <small
              className={`text-${
                props.mode === "light" ? "body-secondary" : "light"
              }`}
            >
              Developed by Sandeep Kumar
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
