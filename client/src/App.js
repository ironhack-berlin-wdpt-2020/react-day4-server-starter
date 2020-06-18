import React from 'react';
import logo from './logo.svg';
import './App.css';

import AddProject from './components/AddProject';
import ListProjects from './components/ListProjects';

function App() {
  return (
    <div className="App">
      <AddProject />
      <ListProjects />
    </div>
  );
}

export default App;
