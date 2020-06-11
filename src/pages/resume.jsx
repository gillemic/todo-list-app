import React from 'react';
import { Document } from 'react-pdf';

let ResumePage = () => {
  return (
    <div>
      <Document file="./MichaelGillett_Resume.pdf">
      </Document>
    </div>
  );
}

export default ResumePage;