import React from "react";

const Form = (props) => {
  return (
    <div className="container">
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label>Course Name</label>
          <input
            type="text"
            className="form-control"
            value={props.newname}
            onChange={props.name}
          />
        </div>
        <div className="form-group pb-2">
          <label>Course data</label>
          <input
            type="text"
            className="form-control"
            value={props.newdata}
            onChange={props.data}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block "
          onClick={props.addNewItem}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
