import React, { Component } from 'react';
import './App.css';
import ToDoApp from './components/ToDoListApp/ToDoApp';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <div id="container" className="col-md-8 col-md-offset-2">
            <ToDoApp />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
