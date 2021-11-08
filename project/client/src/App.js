import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Form from "./Form";
var server = process.env.REACT_APP_SERVER
  ? process.env.REACT_APP_SERVER
  : "http://localhost:3000";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      synk: [],
    };
    this.childRefs = [];
    this.loadData = this.loadData.bind(this);
    this.loadAndCompare = this.loadAndCompare.bind(this);
    this.loadSynk = this.loadSynk.bind(this);
  }

  componentDidMount() {
    this.loadData();
    setInterval(this.loadAndCompare, 500);
  }
  loadAndCompare() {
    if (this.state.isLoaded) {
       this.loadSynk().then(result =>{
        let synk = result;
        if (
          typeof this.state == "undefined" &&
          typeof this.state.synk == "undefined"
        ) {
          this.setState({ synk: synk });
        } else {
          Object.entries(synk).forEach(([key,value])=> {
            //console.log(this.state.synk[key],value,key);
            if (this.state.synk[key]) {
              console.log(this.state.synk[key],value)
              if (this.state.synk[key] < value) {
                this.setState({ synk: synk,isLoaded:false});
                this.loadData();
    
               // this.render();
              }
            } else if(this.state.synk[key] !== 0 && this.state.synk[key]!==null){
              this.setState({ synk: synk,isLoaded:false});
              this.loadData();
             // this.render();           
            }
          });
        }
      });
    }
  
  }

  loadSynk() {
    let returnarr = {};
   returnarr = fetch(server + "/synk", {
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
          let arr = {};
          for (let i = 0; i < result.length; i++) {
            arr[result[i].id] = result[i].number;
          }
          return arr;
        },
        (error) => {
     
        }
      )
      return returnarr;

  }
  loadData() {
    fetch(server + "/owner", {
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
    fetch(server + "/owner", {
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
    fetch("server/owner", {
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
        let number = 1;
        let id = Number(item.id);
        if (this.state.synk[id]) {
          number = this.state.synk[id];
        }
        let refer = React.createRef();
        let itm = { owner: items.id, ref: refer };
        this.childRefs.push(itm);

        return (
          <Form
            number={number}
            ref={refer}
            index={index}
            key={number+" "+index}
            id={item.id}
            owner={item.owner}
            address={item.address}
            cars={item.cars}
          />
        );
      });
      return (
        <div className="app">
          {owners}
          <button className="addForm" onClick={this.create}>
            ➕
          </button>
        </div>
      );
    }
  }
}

export default App;
