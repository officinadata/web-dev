import React from "react";

function Event({event}) {

  console.log(JSON.stringify(event));
  
  return (
    <div>
      <h1>{event.title} </h1>
      <h2>DaRe project..</h2>
      {/* <img src={`data:image/png;base64,${response[0].encodedImage}`} /> */}
      <div> {event.author} </div>
      <div> {event.summary} </div>
      <div> {event.keywords} </div>
      <div> {event.pages} </div>
      <div> {event.size} </div>
    </div>
  );
}

export default Event;
