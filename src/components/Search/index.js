import React, { useState, useEffect } from "react";
import { csv } from 'd3';
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import customParseFormat from "dayjs/plugin/customParseFormat";

import "./Search.css";

dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchText, setSearchText] = useState("");
  const [csvResults, setCsvResults] = useState([]);

  useEffect(() => {

    const fetchEvents = async () => {
      const data = await csv(process.env.PUBLIC_URL + './csv_output.csv');

      setCsvResults(data);

    };

  }, []);

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
          let search = searchText.toLowerCase();
          let result = csvResults.filter((e) =>
            e.Summary.toLowerCase().includes(search) || e.Keywords.includes(search)
          );
          result = result.filter((e) =>
            dayjs(e["Created Date"].substring(0, 10), "DD/MM/YYYY").isBetween(
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
