import React, { Component } from 'react';
import axios from 'axios';

class AddProject extends Component {

  state = {
    title: '',
    description: '',
    image_url: ''
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
      .then((resp) => {
        this.props.addNewProject(resp.data)
        this.setState({ title: "", description: "" });
      })
  }

  handleFileUpload = (e) => {

    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    axios.post('/api/image', uploadData).then((resp) => {
      this.setState({
        image_url: resp.data.image_url
      })
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

          <input type="submit" value="Submit" />
        </form>

        <input
          type="file"
          onChange={this.handleFileUpload} />
      </div>
    )
  }

}

export default AddProject;