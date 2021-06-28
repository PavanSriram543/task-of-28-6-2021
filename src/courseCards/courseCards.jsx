import React, { Component } from "react";
import Form from "../testform";
import CourseCard from "./courseCard/courseCard";

import Cards_data from "./state";

class CoueseCards extends Component {
  userData;

  constructor(props) {
    super(props);

    this.state = {
      cards: Cards_data,

      name: "",
      data: "",
    };
  }

  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleChangedata = (e) => {
    this.setState({ data: e.target.value });
  };

  handleSubmit = (e) => {
    this.setState({
      name: "",
      data: "",
    });
    console.log(this.state);
  };

  addNewItem = () => {
    const { cards } = this.state;
    const data = {
      image: "./trending-courses/angular.png",
      heading: this.state.name,
      developer: this.state.data,
      id: Math.random,
    };
    cards.push(data);
    this.setState({ cards });
    console.log(cards);
  };

  render() {
    return (
      <div className="col-md-12 plr pb-3">
        <div className="row m-0">
          <h3 className="pl-20 ">TRENDING COURSES</h3>
          {this.state.cards.map((card) => (
            <CourseCard
              image={card.image}
              key={card.id}
              developer={card.developer}
              heading={card.heading}
            />
          ))}
          <div className="p-0">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add custom course{" "}
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      add your custom course here{" "}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <Form
                      name={this.handleChangeName}
                      data={this.handleChangedata}
                      Submit={this.handleSubmit}
                      addNewItem={this.addNewItem}
                      newname={this.state.name}
                      newData={this.state.data}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CoueseCards;
