import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>To-do List</h1>
        </header>
    )
}
//yo

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
