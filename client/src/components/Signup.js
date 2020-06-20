import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {

  state = {
    email: '',
    password: ''
  }

  // you can use for every input field
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    axios.post("/api/signup", { email, password })
      .then((resp) => {
        this.props.updateUser(resp.data)
        this.setState({ email: "", password: "" });
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="email" value={this.state.username} onChange={this.handleChange} />

          <label>Password:</label>
          <textarea name="password" value={this.state.password} onChange={this.handleChange} />

          <input type="submit" value="Signup" />
        </form>
      </div>
    )
  }

}

export default Signup;