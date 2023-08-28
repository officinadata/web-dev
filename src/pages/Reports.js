import React from 'react';
import { useParams } from 'react-router-dom';

import response from '../assets/response.json';

function Reports() {
    const { id } = useParams();
  return (
    <div>
      <h1>Reports {id}  </h1>
      <h2>DaRe project..</h2>
      <img src={`data:image/png;base64,${response[0].encodedImage}`} />
      <div> {response[0].associations} </div>
      <div> {response[0].summary} </div>
      <div> {response[0].timeline} </div>
      <div> {response[0].wordCloud} </div>
    </div>
  );
}

export default Reports;