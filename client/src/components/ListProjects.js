import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

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

  render() {

    return (
      <div>
        {
          this.state.listOfProjects.length === 0
            ? <h1>LOADING ....</h1>
            : this.state.listOfProjects.map(p => {
              return <Link to={`/projects/${p._id}`}>
                <h3>{p.title}</h3>
              </Link>
            })
        }
      </div>
    )

  }

}

export default ListProjects