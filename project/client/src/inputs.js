import React from "react";
class Inputs extends React.Component {
  constructor(data) {
    super(data);
    this.state = {
      owner: data.owner,
      address: data.address,
    };
    this.update = this.update.bind(this);
  }
  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case "owner":
        this.setState({ owner: value });
        break;
      case "address":
        this.setState({ address: value });
        break;
      default:
        throw Error;
    }
    // e.target.focus();
  }
  render() {
    return (
      <p>
        <input
          type="text"
          name="owner"
          value={this.state.owner}
          key={"input owner" + this.state.id}
          onChange={this.update}
        />
        <input
          type="text"
          name="address"
          value={this.state.address}
          key={"input address" + this.state.id}
          onChange={this.update}
        />
      </p>
    );
  }
}
export default Inputs;
