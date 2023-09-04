import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Reports = () => {
  const { id } = useParams();
  const location = useLocation();
  const report = location.state;

  return (
    <div>
      <h1>{report.Title} </h1>
      <h2>DaRe project..</h2>
      {/* <img src={`data:image/png;base64,${response[0].encodedImage}`} /> */}
      <div> {report.Author} </div>
      <div> {report['File Name']} </div>
      <div> {report.Summary} </div>
      <div> {report['Created Date']} </div>
      <div> {report.Keywords} </div>
      <div> {report.Pages} </div>
      <div> {report.Size} </div>
    </div>
  );
}

export default Reports;