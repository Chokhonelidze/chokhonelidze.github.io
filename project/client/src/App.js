import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Form from "./Form";

var server = process.env.REACT_APP_SERVER
  ? process.env.REACT_APP_SERVER
  : "http://localhost:3000";

var API = process.env.API ? process.env.API : "/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
    this.childRefs = [];
  }

  componentDidMount() {
    fetch(server + API + "/owner", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  create(e) {
    fetch(server + API + "/owner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
      body: JSON.stringify({
        address: "your address",
        owner: "your name",
        cars: [],
      }),
    });
    window.location.reload(false);
  }
  update(e) {
    /*
    e.preventDefault();
    this.state.items[e.target.id].owner =
      this.state[e.target.id].childComponentRefs[
        this.state[e.target.id].items.index
      ];
    fetch("server/owner", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5000",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
      body: JSON.stringify({
        address: this.state.items[e.target.id].address,
        owner: this.state.items[e.target.id].owner,
        cars: this.state.items[e.target.id].cars,
      }),
    });
    */
  }
  delete(e) {
    fetch(server + API + "/owner", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        address: this.state.items.address,
        owner: this.state.items.owner,
        cars: this.state.items.cars,
      }),
    });
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <div>
          <h1>server = {process.env.REACT_APP_SERVER} </h1> Error:{" "}
          {error.message};
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      let owners = this.state.items.map((item, index, obj) => {
        obj.index = index;
        let refer = React.createRef();
        let itm = { owner: items.id, ref: refer };
        this.childRefs.push(itm);
        return (
          <Form
            ref={refer}
            index={index}
            key={"owner" + index}
            id={item.id}
            owner={item.owner}
            address={item.address}
            cars={item.cars}
          />
        );
      });
      return (
        <div className="app">
          <div className="gridContainer">{owners}</div>
          <button className="addForm" onClick={this.create}>
            ➕
          </button>
        </div>
      );
    }
  }
}

export default App;
