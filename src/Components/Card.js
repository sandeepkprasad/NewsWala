import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="container my-3">
      <div className={`card bg-${props.mode}`}>
        <img
          src={
            props.urlToImage
              ? props.urlToImage
              : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <span className="badge rounded-pill text-bg-success">
            {props.source}
          </span>
          <h5
            className={`card-title text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            {props.title ? props.title.slice(0, 50) : "Title no available"}...
          </h5>
          <p
            className={`card-text text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            {props.description
              ? props.description.slice(0, 80)
              : "Description not available"}
            ...
          </p>
          <p className="card-text">
            <small
              className={`text-${
                props.mode === "light" ? "body-secondary" : "light"
              }`}
            >
              {props.author}, {new Date(props.publishedAt).toUTCString()}
            </small>
          </p>
          <Link
            to={props.url}
            target="_blank"
            className="btn btn-warning btn-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
