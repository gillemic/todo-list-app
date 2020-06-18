import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            fontSize: '20px',
            border: "solid 2px",
            margin: '5px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}> 
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                    (this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>   
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#000',
    fontSize: '20px',
    border: '10px',
    borderColor: '#fff',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem