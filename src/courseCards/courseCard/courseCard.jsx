import React from "react";
import "./courseCard.css";

const CourseCard = (props) => {
  return (
    <div className="col-md-3 pb-20">
      <div className="card course-card border-0">
        <img className="card-top" src={props.image} alt="" />
        <div className="card-body">
          <h5 className="card-text justify text-ellipsis">{props.heading}</h5>
          <p className="card-text justify text-ellipsis f-12">
            {props.developer}
          </p>
        </div>
        <div className="card-footer bg-white">
          <h6>
            <i>Reviews</i>
          </h6>
          <p className="card-text">
            <i className="fa fa-star text-warning fa-lg" aria-hidden="true" />
            <i className="fa fa-star text-warning fa-lg" aria-hidden="true" />
            <i className="fa fa-star text-warning fa-lg" aria-hidden="true" />
            <i className="fa fa-star text-warning fa-lg" aria-hidden="true" />
            <i className="fa fa-star text-warning fa-lg" aria-hidden="true" />
            <span> 5.0 </span>
            <span> (257)</span>
          </p>
        </div>
        <div className="card-data pb-20">
          <p className="f-12 mb-4 text-white">
            <i>Next Batch</i>
          </p>
          <h6 className="text-white">In 5 Days - 15th Jun</h6>
          <p className="f-12 mb-2 text-white">
            <i>What Will I Learn ?</i>
          </p>
          <ul className="text-white">
            <li>
              <p className="f-12 mb-2 text-white">Introduction to Angular</p>
            </li>
            <li>
              <p className="f-12 mb-2 text-white">Why Angular</p>
            </li>
            <li>
              <p className="f-12 mb-2 text-white">
                Understanding Angular Versions
              </p>
            </li>
            <li>
              <p className="f-12 mb-2 text-white">Typescript &amp; ES6</p>
            </li>
            <li>
              <p className="f-12 mb-2 text-white">Power odd Types</p>
            </li>
            <li>
              <p className="f-12 mb-2 text-white">Explore Functions</p>
            </li>
            <li>
              <p className="f-12 mb-2 text-white">Classes</p>
            </li>
            <li>
              <p className="f-12 mb-2 text-white">Interfaces</p>
            </li>
            <li>
              <p className="f-12 mb-2 text-white">
                Modules, Decorators, Components...
              </p>
            </li>
          </ul>
          <div className="text-center">
            <button type="button" className="btn btn-dark border-white">
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
