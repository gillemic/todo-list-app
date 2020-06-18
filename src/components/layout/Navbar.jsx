import React, { Component } from "react";
 
const NavStyle = {
    display: "flex",
    backgroundColor: "white",
    marginTop: "0px",
    width: "100%",
    justifyContent: "center"
}

const NavItemStyle = {
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "5px",
}

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav style={NavStyle}>
          <a href="/" style={NavItemStyle}>
            <h1>Home</h1>
          </a>
          <a href="#/todo" style={NavItemStyle}>
              <h1>TodoList</h1>
          </a>
          <a href="#/resume" style={NavItemStyle}>
              <h1>Resume</h1>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}
 
export default NavBar;