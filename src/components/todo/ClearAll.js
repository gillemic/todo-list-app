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
                <button style={buttonStyle} onClick={this.onSubmit}>Clear Completed Tasks</button>
            </div>
        )
    }
}

const buttonStyle = {
    padding: "5px",
    fontSize: "16px",
    backgroundColor: "#f30",
    fontWeight: "bold"
}

export default ClearAll;
