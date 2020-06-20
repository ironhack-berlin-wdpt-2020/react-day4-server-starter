import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import AddProject from './AddProject';

class ListProjects extends Component {

  state = {
    listOfProjects: []
  }

  componentDidMount() {
    axios.get('/api/projects').then((resp) => {
      console.log(resp.data)
      this.setState({
        listOfProjects: resp.data
      })
    })
  }

  deleteHandler = (projectID) => {
    axios.delete('/api/projects/' + projectID).then(() => {
      this.setState({
        listOfProjects: this.state.listOfProjects.filter(p => p._id !== projectID)
      })
    })
  }

  newProjectHandler = (project) => {
    this.setState({
      listOfProjects: this.state.listOfProjects.concat(project)
    })
  }

  render() {

    return (
      <div>
        {
          this.state.listOfProjects.length === 0
            ? <h1>LOADING ....</h1>
            : this.state.listOfProjects.map(p => {
              return (
                <div key={p._id}>
                  <Link to={`/projects/${p._id}`}>
                    <strong>{p.title}</strong>
                  </Link>
                  {p.owner === this.props.currentUser._id ? <button onClick={() => this.deleteHandler(p._id)}>DELETE</button> : ""}
                </div>
              )
            })
        }
        <AddProject addNewProject={this.newProjectHandler} ></AddProject>
      </div>
    )

  }

}

export default ListProjects