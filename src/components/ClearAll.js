import React, { Component } from 'react'

export class ClearAll extends Component {

    getStyle = () => {
        return {
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            padding: '20px',
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.clearAll();
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <button onClick={this.onSubmit}>Clear Completed Tasks</button>
            </div>
        )
    }
}

export default ClearAll;
