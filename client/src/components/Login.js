import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

  state = {
    email: '',
    password: '',
    errorMessage: ''
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

    axios.post("/api/login", { email, password })
      // 2xx status code
      .then((resp) => {
        this.props.updateUser(resp.data)
        this.setState({ email: "", password: "" });

      }).catch((error) => {
        console.log("ERROR !!")
        console.log(error.response)
        this.setState({
          errorMessage: error.response.data.message
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.errorMessage ? <h1>{this.state.errorMessage}</h1> : null}
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />

          <label>Password:</label>
          <textarea name="password" value={this.state.password} onChange={this.handleChange} />

          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }

}

export default Login;