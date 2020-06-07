import React, { Component } from 'react';
import Header from '../components/layout/Header';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import ClearAll from '../components/ClearAll'
import uuid from 'uuid';

import '../App.css';

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
      <div className="App">
        <Header />
        <p className='add-text'>Enter a task and press 'Submit' to add it to your list</p>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete}
        deleteTodo={this.deleteTodo} />
        <ClearAll clearAll={this.clearAll} todos={this.state.todos}/>
      </div>
    );
  }
}

export default TodoList;