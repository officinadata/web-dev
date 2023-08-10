import React, { useState, useEffect } from 'react';
import { csv } from 'd3';
import { ticks } from 'd3-array';
import { Group } from '@visx/group';
import { Circle } from '@visx/shape';
import { scaleTime } from '@visx/scale';
import { TooltipWithBounds, withTooltip } from '@visx/tooltip';
import { useNavigate } from "react-router-dom";

import './Home.css';
import ChartComp  from '../components/svg/componentSVG';

import response from '../assets/response.json';

const width = 800;
const height = 400;
const margin = { top: 20, right: 20, bottom: 20, left: 20 };

function Home({ tooltipOpen, tooltipData, tooltipLeft, tooltipTop, showTooltip, hideTooltip }) {
  const [xDomain, setXDomain] = useState([new Date('2018-01-01'), new Date('2024-01-01')]);
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await csv(process.env.PUBLIC_URL + './all_events.csv');
      setEvents(
        data.map((d) => ({
          x: new Date(d.date),
          y: 0,
          category: d.category,
          title: d.title,
        }))
      );
      events.pop();
    };
    fetchEvents();
  }, []);

  const xScale = scaleTime({
    domain: xDomain,
    range: [margin.left, width - margin.right],
  });
  
  
  const moveTimeWindow = (direction) => {
    const moveByDays = 30;
    const minDate = new Date("2018-01-01");
    const maxDate = new Date("2024-01-01");
    
    const movedDomain = xDomain.map((date) => {
      const newDate = new Date(date.valueOf());
      newDate.setDate(date.getDate() + direction * moveByDays);
  
      if (newDate < minDate || newDate > maxDate) {
        return date;
      }
  
      return newDate;
    });
  
    // Only update the xDomain if it's still within the bounds of the data
    if (movedDomain[0] >= minDate && movedDomain[1] <= maxDate) {
      setXDomain(movedDomain);
    }
  };

 
  const xMin = new Date('2018-01-01');
  const xMax = new Date('2023-12-31');

  const onWheel = (event) => {
//    event.preventDefault();
  
    const zoomFactor = 1 - event.deltaY * 0.001;
    const pointerX = event.clientX;
    const pointerDate = xScale.invert(pointerX - margin.left);
  
    let newXDomain = xDomain.map((date) => {
      const newDate = new Date(pointerDate.valueOf() + (date.valueOf() - pointerDate.valueOf()) * zoomFactor);
      if (newDate < xMin) return xMin;
      if (newDate > xMax) return xMax;
      return newDate;
    });
  
    const diff = newXDomain[1] - newXDomain[0];
    const xDiff = xMax - xMin;
    if (diff >= xDiff) {
      newXDomain[0] = xMin;
      newXDomain[1] = xMax;
    } else {
      const maxDate = new Date(xMax.valueOf() - diff);
      if (newXDomain[0] < xMin) {
        newXDomain[0] = xMin;
        newXDomain[1] = maxDate;
      } else if (newXDomain[1] > xMax) {
        newXDomain[0] = new Date(xMax.valueOf() - diff);
        newXDomain[1] = xMax;
      }
    }
  
    setXDomain(newXDomain);
  };
  

  
    
  const pointColor = (category) => {
    return category === 'A' ? 'blue' : 'red';
  };

  const pointOffset = (category) => {
    return category === 'A' ? 3.0 : -3.0;
  };

  return (
    
    <div className="App" onWheel={onWheel}>

      <div className='svg-buttons-div'>
        <button className='svg-buttons' onClick={() => moveTimeWindow(-1)}>Move Left</button>
        <button className='svg-buttons' onClick={() => moveTimeWindow(1)}>Move Right</button>
      </div>

      <svg width={width} height={height} className='svg-timeline'>
        <Group top={margin.top}>
          <line x1={margin.left} y1={height / 2} x2="99%" y2={height / 2} stroke="darkgray" strokeWidth={5} />
          {ticks(xDomain[0], xDomain[1], xDomain[1].getFullYear() - xDomain[0].getFullYear()).map((d, i) => {
            const x = xScale(new Date(d));
            const year = new Date(d).toLocaleDateString();
            return (
              <g key={i}>
              <line className='ticks' x1={x} y1={height / 2} x2={x} y2={height / 2 + 10} stroke="black" strokeWidth={2} />
              <text x={x} y={height / 2 + 20} textAnchor="middle" fontSize={10}>
                 {year}
              </text>
               </g>
            );
          })};
          {
          events.map((event, index) => (

            <g key={index}>

              <ChartComp 
                    fill="forestgreen" 
                    x={xScale(event.x) - 75} 
                    y={height / 2} width={100} height={75} 
                              
                    x1={xScale(event.x)} y1={height / 2} 
                    x2={xScale(event.x)} y2={height / 2}
                    
                    index = {index}
                    lastIndex = {8}
                    textTitle={event.title}
                    textSummary={response.summary}
                    
                />

              <Circle className='circles'
              onClick={() => {
                if ( event.category === 'A' )
                {
                  navigate(`/reports/${event.title}`)
                }
                else {
                  navigate(`/events/${event.title}`)
                }
              }}
                cx={xScale(event.x)}
                cy={(height / 2) + pointOffset(event.category)}
                r={6}
                fill={pointColor(event.category)}
                onMouseMove={(event) => {
                  const circle = event.target;
                  showTooltip({
                    tooltipData: circle.getAttribute('data-tip'),
                    tooltipLeft: event.clientX,
                    tooltipTop: event.clientY,
                  });
                }}
                onMouseOut={hideTooltip}

                onMouseDown={(event) => {
                  const circle = event.target;
                  showTooltip({
                    tooltipData: circle.getAttribute('data-tip-description'),
                    tooltipLeft: event.clientX,
                    tooltipTop: event.clientY,
                  });
                }}

                data-tip={event.title}
                data-tip-description={`${event.title} (${event.x.toDateString()})`}
              />
            </g>
          ))}
        </Group>
      </svg>
      {tooltipOpen && (
        <TooltipWithBounds left={tooltipLeft} top={tooltipTop}>
          {tooltipData}
        </TooltipWithBounds>
      )}
    </div>
  );
}

export default withTooltip(Home);

