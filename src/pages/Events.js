import React from "react";
import { useParams, useLocation } from "react-router-dom";

function Events() {
  const { id } = useParams();
  const location = useLocation();
  const event = location.state;

  return (
    <div>
      <h1>{event.Title} </h1>
      <h2>DaRe project..</h2>
      {/* <img src={`data:image/png;base64,${response[0].encodedImage}`} /> */}
      <div> {event.Author} </div>
      <div> {event["File Name"]} </div>
      <div> {event.Summary} </div>
      <div> {event["Created Date"]} </div>
      <div> {event.Keywords} </div>
      <div> {event.Pages} </div>
      <div> {event.Size} </div>
    </div>
  );
}

export default Events;
