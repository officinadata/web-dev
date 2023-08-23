import React, { useState, useEffect } from 'react';
import { csv } from 'd3';
import { ticks } from 'd3-array';
import { Group } from '@visx/group';
import { Circle } from '@visx/shape';
import { scaleTime } from '@visx/scale';
import { TooltipWithBounds, withTooltip } from '@visx/tooltip';
import { useNavigate } from "react-router-dom";

import './Home.css';
import Layout from '../components/layoutHome';

import ChartComp  from '../components/svg/componentSVG';

import response from '../assets/response.json';

const width = 1048;
const height = 400;
let firstX = 0;
let lastX = 0;

const margin = { top: 20, right: 20, bottom: 20, left: 20 };

function Home({ tooltipOpen, tooltipData, tooltipLeft, tooltipTop, showTooltip, hideTooltip }) {
  const xMin = new Date('2018-01-01');
  const xMax = new Date('2023-12-31');

  const [xDomain, setXDomain] = useState([xMin, xMax]);
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


  /**
   * 
   * to reset the zoom 
   */
  const resetTimeWindow = (direction) => {
    let currXDomain = xDomain.map(() => {
      const newDate = new Date();
      return newDate;
    });
    currXDomain[0] = xMin;
    currXDomain[1] = xMax;
    setXDomain(currXDomain);
  };

  const onWheel = (event) => {
//    event.preventDefault();
    const minZoomFactor = 1.25;

    const zoomFactor = 1 - event.deltaY * 0.001;
    const pointerX = event.clientX;
    const pointerDate = xScale.invert(pointerX - margin.left);

    let currentXDomain = xDomain.map((date) => {

      const newDate = new Date(pointerDate.valueOf() + (date.valueOf() - pointerDate.valueOf()) );
      if (newDate < xMin) return xMin;
      if (newDate > xMax) return xMax;

      return newDate;
    });
  
    let newXDomain = xDomain.map((date) => {

      const newDate = new Date(pointerDate.valueOf() + (date.valueOf() - pointerDate.valueOf()) * zoomFactor);
      if (newDate < xMin) return xMin;
      if (newDate > xMax) return xMax;

      return newDate;
    });

    const diff = newXDomain[1] - newXDomain[0];
    const xDiff = xMax - xMin;

    const convert2Months = 3600 * 1000 * 24 * 30;
    const minDiff = 6 * convert2Months;
    
    if (diff >= xDiff) {
      newXDomain[0] = xMin;
      newXDomain[1] = xMax;
    } else {
      if(diff > minDiff){

        const maxDate = new Date(xMax.valueOf() - diff);
        if (newXDomain[0] < xMin) {
          newXDomain[0] = xMin;
          newXDomain[1] = maxDate;
        } else if (newXDomain[1] > xMax) {
          newXDomain[0] = new Date(xMax.valueOf() - diff);
          newXDomain[1] = xMax;
        }
      } else {
        newXDomain = currentXDomain;
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
    <Layout>
    <div className="App" onWheel={onWheel}>

      <div className='svg-buttons-div'>
        <button className='svg-buttons' onClick={() => moveTimeWindow(-1)}>Move Left</button>
        <button className='svg-buttons' onClick={() => moveTimeWindow(1)}>Move Right</button>
        <button className='svg-buttons' onClick={() => resetTimeWindow(1)}>Reset</button>
      </div>

      <svg width={width} height={height} className='svg-timeline'>
        <Group top={margin.top}>
          <line x1={margin.left} y1={height / 2} x2="99%" y2={height / 2} stroke="darkgray" strokeWidth={25} />
          {ticks(xDomain[0], xDomain[1], xDomain[1].getFullYear() - xDomain[0].getFullYear()).map((d, i, array) => {
            const x = xScale(new Date(d));
            const year = new Date(d).getFullYear();// toLocaleDateString();

            const nextD = array[i+1];
            const x1 = nextD ? xScale(new Date(nextD)) : width;
firstX = xScale(new Date(array[0]));
lastX = xScale(new Date(array[array.length - 1]));
const colorArray = [
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
const randomColor = Math.floor(Math.random()*16777215).toString(16);


            return (

              <g key={i}>
{/*              <line className='ticks' x1={x} y1={height / 2} x2={x} y2={height / 2 + 10} stroke="black" strokeWidth={25} />*/}
              <line className='ticks' x1={x} y1={height / 2} x2={x1} y2={height / 2} stroke={colorArray[i]} strokeWidth={25} />

              <text x={x} y={height / 2 + 20} textAnchor="middle" fontSize={10}>
                 {year}
              </text>
               </g>
            );
            
          })};
          <line className='ticks' x1={20} y1={height / 2} x2={firstX} y2={height / 2} stroke="yellow" strokeWidth={25} />
          <line className='ticks' x1={lastX} y1={height / 2} x2="99%" y2={height / 2} stroke="green" strokeWidth={25} />
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

              <Circle className={index==8 ? 'hidden' : 'circles'} 
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
    </Layout>
  );
}

export default withTooltip(Home);

