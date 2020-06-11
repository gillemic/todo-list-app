import React from 'react';
import { Link } from "react-router-dom";

const mainPageStyle = {
    
}

const headerStyle = {
    margin: "auto",
    width: "auto",
    textAlign: "center",
    backgroundColor: "#666",
    border: "solid",
    marginBottom: "10px",
    height: "page-height"
}

const mainPageBody = {
    width: "50%",
    margin: "auto",
    textAlign: "center",
    backgroundColor: "white",
    border: 'solid',
    borderColor: '#888',
    fontSize: "18px"
}

const MainPage = () => {
    return (
        <div style={mainPageStyle}>
            <div style={headerStyle}>
                <h1>Welcome</h1>
                <small>This website was made by Michael Gillett using React</small>
            </div>
            <p style={{textAlign: "center", marginBottom: "10px", fontSize: "18px"}}>This is a website for documenting and showcasing my projects in an accesible manor</p>
            <div style={mainPageBody}>
                <Link to="./todo" style={{fontSize: '24px'}}>Manage a To-do List</Link> 
            </div>
        </div>
       
    );
}

export default MainPage;