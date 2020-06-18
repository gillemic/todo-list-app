import React from 'react';
import NavBar from '../components/layout/Navbar';
import Header from '../components/layout/Header';

const NotFoundStyle = {
    textAlign: "center",
    backgroundColor: "#f22",
    fontSize: "24px",
    marginTop: "15px",
}

const NotFoundPage = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <div style={NotFoundStyle}>
                <h1>Page not found</h1>
                <p>This page does not exist. Sorry!</p>
            </div>
        </div>
    );
}

export default NotFoundPage;