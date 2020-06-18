import React, { Component } from 'react';
import Header from '../components/layout/Header';
import Todos from '../components/todo/Todos';
import AddTodo from '../components/todo/AddTodo';
import ClearAll from '../components/todo/ClearAll'
import uuid from 'uuid';

import '../App.css';
import NavBar from '../components/layout/Navbar';

class TodoList extends Component {
  state = {
    todos: [
      
    ] 
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //Delete Todo
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id
    !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  clearAll = () => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.completed === false)] });
  }

  

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <div className="App">
          <header style={todoHeader}>
              <h1>Todo List</h1>
          </header>
          <p className='add-text'>Enter a task and press 'Submit' to add it to your list</p>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete}
          deleteTodo={this.deleteTodo} />
          <ClearAll clearAll={this.clearAll} todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

const todoHeader = {
  marginTop: "10px",
  marginBottom: "10px",
  width: "auto",
  textAlign: "center",
  backgroundColor: "#394",
  border: "solid",
}

export default TodoList;