import React, { Component } from 'react';
import '../../App.css';
import Title from './Title';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import axios from 'axios';

// window.id = 0;

class ToDoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
  }

  componentDidMount() {
    axios.get(this.apiUrl)
      .then((res) => {
        // console.log('GET res', res)
        this.setState({ data: res.data })
        return res
      })
      .catch((err) => {
        console.error('ERROR:', err);
      })
  }

  addToDo = (val) => {
    const toDo = { text: val }
    axios.post(this.apiUrl, toDo)
      .then((res) => {
        // console.log('POST res', res)
        this.state.data.push(res.data);
        this.setState({ data: this.state.data });
        return res
      })
      .catch((err) => {
        console.error('ERROR:', err);
      })
  }

  handleRemove = (id) => {
    const remainder = this.state.data.filter((toDo) => {
      return (toDo.id !== id);
    })

    // axios.delete(this.apiUrl + '/' + id)
    axios.delete(`${this.apiUrl}/${id}`)
      .then((res) => {
        // console.log('DEL res', res)
        this.setState({ data: remainder });
        return res
      })
      .catch((err) => {
        console.error('ERROR:', err);
      })
  }

  render() {

    return (
      <div>
        <Title toDoCount={ this.state.data.length }/>
        <ToDoForm addToDo={ this.addToDo } />
        <ToDoList
          toDos={ this.state.data }
          remove={ this.handleRemove }
        />
      </div>
    )
  }

}

export default ToDoApp;
