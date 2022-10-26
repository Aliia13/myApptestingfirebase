import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    info: []
  };
  callApi = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

    // const res = await fetch("https://jsonplaceholder.typicode.com/users/1",
    //  {
    //   method : "GET"
    // })
    const data = await res.json();
    return data;
  };

  componentDidMount = () => {
    this.callApi().then((data) => {
      this.setState({
        info: data
      });
    });
  };
  render() {
    const { info } = this.state;

    return (
      <div className="container">
        <h1>User Data</h1>
        <p>
          {" "}
          <strong>Name: </strong> {info.name}
        </p>
        <p>
          {" "}
          <strong>Website: </strong> {info.website}
        </p>
        <p>
          {" "}
          <strong>Email: </strong>
          {info.email}{" "}
        </p>
        <p>
          {" "}
          <strong>Phone: </strong>
          {info.phone}{" "}
        </p>
      </div>
    );
  }
}
export default App;