import React, { Component } from "react";
import { Link } from "react-router-dom";
import setAuthToken from "../utils/setAuthtoken";
import axios from "axios";
import io from 'socket.io-client';

export class Dashboard extends Component {
  state = {
    user: {}
  };
  
  componentWillMount() {
    const token = localStorage.getItem("example-app");

    if (token) {
      setAuthToken(token);
    }

    axios
      .get("api/user")
      .then(response => {
        this.setState({
          user: response.data
        });
      })
      .catch(err => console.log(err.response));



      
  }

  componentDidMount(){
    // const socket = io('localhost:3001');
    // socket.on('connection')
  }
  
  handleLogout = () => {
    localStorage.removeItem("example-app");
    this.setState({
      redirect: true
    });
  };
  connectToRoom = (e) =>{
    console.log(e.target.attributes.room.value)
  }
  render() {
    return (
      <div>
        {/* <i className="material-icons account-icon">account_circle</i> */}
        <Link to="/">
          <button className="logout-button" onClick={this.handleLogout}>
            Log Out
          </button>
        </Link>
        <h1>Dashboard</h1>

        <Link to={{ pathname: "/chatroom/" + '1234' }}><h3 room={1234} onClick={this.connectToRoom}>John</h3></Link>
        <Link to={{ pathname: "/chatroom/" + '2345' }}><h3  room={2345}>Paul </h3></Link>
        <h3  room={3456}>George</h3>
        <h3  room={4567}>Ringo</h3>
      </div>
    );
  }
}

export default Dashboard;
