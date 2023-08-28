import React from 'react';
import "./SearchBox.css";

export default function SearchBox({setMessage, setSearchInput}) {
    const onButtonClick=(changeValue)=>{
        setMessage(changeValue)
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
    const handleExpand = () => {
        const search = document.querySelector(".search-input");
        search.classList.toggle("search-expanded");
    };

    return (<div className="container">
            <button className="search-wrapper" onClick={handleExpand}>
                SE
            </button>
            <input className="search-input" type="search" placeholder="Search here" onChange={handleChange} />
            <br />
            <button onClick={()=>onButtonClick('Message from child 1')}>click me</button>

        </div>);
}