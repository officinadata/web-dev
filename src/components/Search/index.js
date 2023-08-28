import React, { useState } from "react";

import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import customParseFormat from "dayjs/plugin/customParseFormat";

import "./Search.css";
import response from "../../assets/response.json";

dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchText, setSearchText] = useState("");

  return (
    <div className={"searchParent " + (isExpanded && "searchParentExpanded")}>
      {isExpanded && (
        <>
          <input
            className="form-control searchDateInput"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            type="date" 
          />
          <input
            className="form-control searchDateInput"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
          />
          <input
           className="form-control searchTextInput"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </>
      )}
      <button
        type="button"
        className="btn btn-sm p-0"
        onClick={() => {
          let result = response.filter((e) =>
            e.summary.toLowerCase().includes(searchText.toLowerCase())
          );
          result = result.filter((e) =>
            dayjs(e.timeline, "DD-MMMM-YYYY").isBetween(
              startDate,
              endDate,
              null,
              "[]"
            )
          );
          console.log(result);
          setIsExpanded(!isExpanded);
        }}
      >
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default Search;
