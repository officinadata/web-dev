import React from "react";

const componentSVG = ( 
    { index, lastIndex, textTitle, textSummary, 
      fill, stroke, strokeWidth, 
      x, y, x1, y1, x2, y2,
      width, height
    }
 ) => {
  const isOdd = number => number % 2 !== 0;

  let heightAdd = 100;
  if(!isOdd(index)){
    heightAdd = heightAdd * -1;
  }

  y2 = y2 + heightAdd;
 
  if(index === lastIndex) return (<g/>);

  
  return (
    <g  myindex={index}>
      <g transform={isOdd(index)?"translate(-50, 0)":"translate(-50, -75)"}>
        {<rect x={x2} y={y2} width={width} height={height} fill={fill} rx={10} ry={10} />}
        {<polygon points={isOdd(index) ? (x2+40)+","+(y2)+","+(x2+40+20)+","+(y2)+","+(x2+40+10)+","+(y2-10) : (x2+40)+","+(y2+85-10)+","+(x2+40+20)+","+(y2+85-10)+","+(x2+40+10)+","+(y2+85) } fill={fill} />}

        <foreignObject x={x2} y={y2} width={width} height={height}>
          <div className="events">
            <b className="event-balloon-text-head">{textTitle}</b>
            <br />
            {textSummary}
          </div>
        </foreignObject>
        
        
      </g>
      <line className='event-lines' 
        x1={x1} y1={y1} 
        x2={x2} y2={y2} 
        stroke="black" strokeWidth={2} />
      </g>
  );
};

export default componentSVG;