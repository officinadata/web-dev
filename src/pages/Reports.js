import React from 'react';
import { useParams } from 'react-router-dom';

import response from '../assets/response.json';

function Reports() {
    const { id } = useParams();
  return (
    <div>
      <h1>Reports {id}  </h1>
      <h2>DaRe project..</h2>
      <img src={`data:image/png;base64,${response.encodedImage}`} />
      <div> {response.associations} </div>
      <div> {response.summary} </div>
      <div> {response.timeline} </div>
      <div> {response.wordCloud} </div> 
    </div>
  );
}

export default Reports;