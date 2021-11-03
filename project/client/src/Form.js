import React from "react";
import Cars from "./Cars";
import Inputs from "./inputs";

class Form extends React.Component {
  constructor(data) {
    super(data);
    this.references = [];
    this.state = {
      ref: data.ref,
      index: data.index,
      id: data.id,
      owner: data.owner,
      address: data.address,
      cars: data.cars,
    };
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.addNewCar = this.addNewCar.bind(this);
    this.removeCar = this.removeCar.bind(this);
  }
  delete(e) {
    e.preventDefault();
    let id = Number(e.target.form.id);

    fetch("http://localhost:3000/owner", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5000",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    window.location.reload(false);
  }
  addNewCar() {
    let cars = this.state.cars;
    cars.push({ model: "model", brand: "brand", year: "year", color: "color" });
    this.setState({ cars: cars });
  }
  removeCar(e) {
    let cars = this.state.cars;
    delete cars[e.target.value];
    this.setState({ cars: cars });
  }
  save(e) {
    e.preventDefault();
    let car = this.references.filter((car) => {
      return (
        car.id === this.state.id &&
        car.ref.current != null &&
        car.obj === "cars"
      );
    });
    car = car.map((itm) => {
      return itm.ref.current.state;
    });
    let inputs = this.references.filter((input) => {
      return (
        input.id === this.state.id &&
        input.ref.current != null &&
        input.obj === "inputs"
      );
    });
    inputs = inputs.map((itm) => {
      return itm.ref.current.state;
    });
    fetch("http://localhost:3000/owner", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5000",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
      body: JSON.stringify({
        id: this.state.id,
        address: inputs[0].address,
        owner: inputs[0].owner,
        cars: car,
      }),
    });
  }
  render() {
    let cars = this.state.cars.map((car, index) => {
      let refer = React.createRef();
      let obj = { obj: "cars", id: this.state.id, ref: refer };
      this.references.push(obj);
      return (
        <div key={"div" + this.state.id + "_" + car.model} className="col cars">
          <button value={index} onClick={this.removeCar} className="delButton">
            ❌
          </button>
          <Cars
            ref={refer}
            id={this.state.id}
            key={"car " + this.state.id + "_" + car.model}
            model={car.model}
            brand={car.brand}
            color={car.color}
            year={car.year}
            image={car.image}
          />
        </div>
      );
    });
    let inputs = React.createRef();
    let obj = { obj: "inputs", id: this.state.id, ref: inputs };
    this.references.push(obj);
    return (
      <form id={this.state.id} key={this.state.index} className='Form' onSubmit={this.save}>
        <button className='delButton' key={"delButton_" + this.state.index} onClick={this.delete}>
        ❌
        </button>
        <Inputs
          ref={inputs}
          id={this.state.id}
          key={this.state.owner + this.index}
          owner={this.state.owner}
          address={this.state.address}
        />
        <fieldset>
          <legend>cars </legend>
          <div className="container">
            <div className="row">{cars}</div>
          </div>
          <button onClick={this.addNewCar} className='addCar'>➕</button>
        </fieldset>
        <input className='saveButon' type="submit" value="save" />
      </form>
    );
  }
}

export default Form;
