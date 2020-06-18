import React from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/layout/Navbar';
import Header from '../components/layout/Header';

const mainPageBody = {
    width: "50%",
    margin: "20px auto",
    textAlign: "center",
    backgroundColor: "white",
    border: 'solid',
    borderColor: '#888',
    fontSize: "18px"
}

const MainPage = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <div>
                <p style={mainPageBody}>This is a website for documenting and showcasing my projects in an accesible manor</p>
            </div>
        </div>
       
    );
}

export default MainPage;