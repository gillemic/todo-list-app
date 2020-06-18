import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        var limit = 32;
        // eslint-disable-next-line
        this.state.title = this.state.title.trim().substr(0, limit);
        

        if (this.state.title) {
            this.props.addTodo(this.state.title);
            this.setState({ title: '' });
        }
    }

    onChange = (e) => this.setState({ [e.target.name]: 
    e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    name="title"
                    style={{ flex: '10', padding: '5px', marginTop: '5px', marginBottom: '0px' }}
                    placeholder="Add Todo ... (32 character Max)"
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1', marginTop: '5px', marginLeft: '5px', fontWeight: 'bold'}}
                />
            </form>
        )
    }
}

export default AddTodo
