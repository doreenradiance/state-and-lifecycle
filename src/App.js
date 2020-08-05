import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUserForm from './AddUserForm';
import AllUsers from './AllUsers';
import Users from './Users';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users : [
        {name: "Calvin", gen: "14", email: "calvin@email.com"},
        {name: "Doreen", gen: "15", email: "doreen@email.com"},
        {name: "Irene", gen: "2", email: "irene@email.com"},
      ]
    }
  }
  addNewUser = (user) => {
    this.setState({users: [...this.state.users, user]})
  }
  render(){
    return (
      <div className="App">
        <AddUserForm addUser ={this.addNewUser} />
        <AllUsers userInfo={this.state.users} />
      </div>
    );
  }
}

export default App;
