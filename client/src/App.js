import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Redirect } from 'react-router-dom'

import AddProject from './components/AddProject';
import ListProjects from './components/ListProjects';
import Signup from './components/Signup';
import Login from './components/Login';

class App extends React.Component {

  state = {
    loggedInUser: this.props.user
  }

  // user is not logged in already --> they are logging in using our React app
  updateUser = (newUser) => {
    this.setState({
      loggedInUser: newUser
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedInUser ? <h1> Hey, {this.state.loggedInUser.email} !</h1> : ""}
        <Route exact path="/signup" render={() => <Signup updateUser={this.updateUser}></Signup>} />
        <Route exact path="/login" render={() => <Login updateUser={this.updateUser}></Login>} />
        <Route exact path="/projects" render={() => {
          if (this.state.loggedInUser) {
            return <ListProjects currentUser={this.state.loggedInUser}></ListProjects>
          } else {
            return <Redirect to="/login"></Redirect>
          }
        }} />
        {/* <Route exact path="/projects/:id" component={ProjectDetails} /> */}
        {/* <Signup /> */}
        {/* <AddProject />
      <ListProjects /> */}
      </div>
    );
  }
}

export default App;
