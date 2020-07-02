import React from 'react';
import {StyleSheet, ReactPDF } from 'react-pdf';
import { PDFViewer } from '@react-pdf/renderer';
import NavBar from '../components/layout/Navbar';
import Header from '../components/layout/Header';
import { Component } from 'react';

// Create styles

// Create Document Component
const pdfStyle = {
  width: "80%",
  height: "80%",
  minHeight: "700px",
  display: "flex",
  margin: "auto"
}

class ResumePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <iframe style={pdfStyle} title="resume" src="MichaelGillett_Resume.pdf"/>
      </div>
    );
  }
}


export default ResumePage;