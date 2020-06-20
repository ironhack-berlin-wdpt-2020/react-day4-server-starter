import React, { Component } from 'react';
import axios from 'axios';

class AddProject extends Component {

  state = {
    title: '',
    description: ''
  }

  // you can use for every input field
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const title = this.state.title;
    const description = this.state.description;

    axios.post("/api/projects", { title, description })
      .then(() => {
        this.setState({ title: "", description: "" });
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={this.handleChange} />

          <button type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default AddProject;