import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Moment from "react-moment";
const Render = () => {
  const [covid, setCovid] = useState("");
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("Ph");
  const [Loading, setLoading] = useState(true);

  const dateToFormat = new Date();
  useEffect(() => {
    const getCovid = async () => {
      const response = await fetch(
        `https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=${country}`
      );
      const data = await response.json();
      setCovid(data.data.rows[0]);

      console.log(data);
      setLoading(false);
    };
    getCovid();
  }, [country]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setCountry(search);
    setSearch("");
  };
  const style = {
    fontSize: "14px"
  };
  const Error = () => {
    return (
      <div style={{ color: "white", fontSize: "20px" }}>
        <h1>Undefined Country</h1>
      </div>
    );
  };

  if (Loading) {
    return (
      <div style={{ color: "white", fontSize: "20px" }}>
        <Error />
      </div>
    );
  }

  return (
    <div>
      <div className="data-set-1">
        <div className="Covid19">COVID 19 TRACKER</div>
        <form onSubmit={getSearch} className="search-form">
          <input
            style={style}
            type="text"
            className="search-bar"
            placeholder="Search Country ..."
            value={search}
            onChange={updateSearch}
          />

          <button type="Submit" className="search-button">
            <SearchIcon fontSize="large" />
          </button>
        </form>
        <h1 className="date">
          {" "}
          As of <Moment date={dateToFormat} format="YYYY/MM/DD" />{" "}
        </h1>
        <h1 className="title">
          <img src={covid.flag} alt={country.country} className="flag-sea" />
          <div>{covid.country}</div>
          <br /> <br />
        </h1>
      </div>
      <div className="data-set-parent">
        <div className="data-set">
          <img
            src="https://img.icons8.com/color/48/000000/brief.png"
            alt=""
            className="icons"
          />
          <h2 className="Name">
            Total Case: <br />
            <div style={{ color: "red" }}>{covid.total_cases}</div>
          </h2>
        </div>
        <div className="data-set">
          <img
            className="icons"
            src="https://img.icons8.com/color/48/000000/recovery.png"
            alt=""
          />
          <h2 className="Name">
            {" "}
            Total Recovered: <br />
            <div style={{ color: "red" }}>{covid.total_recovered}</div>
          </h2>
        </div>
        <div className="data-set">
          <img
            className="icons"
            src="https://img.icons8.com/color/100/000000/headstone.png"
            alt=""
          />
          <h2 className="Name">
            Total Deaths: <br />
            <div style={{ color: "red" }}>{covid.total_deaths}</div>
          </h2>
        </div>
        <div className="data-set">
          <img
            className="icons"
            src="https://img.icons8.com/cute-clipart/64/000000/skull.png"
            alt=""
          />
          <h2 className="Name">
            New Death: <br />
            <div style={{ color: "red" }}>{covid.new_deaths}</div>
          </h2>
        </div>
        <div className="data-set">
          <img
            className="icons"
            src="https://img.icons8.com/cute-clipart/64/000000/add-file.png"
            alt=""
          />
          <h2 className="Name">
            New Cases: <br />
            <div style={{ color: "red" }}>{covid.new_cases}</div>
          </h2>
        </div>
        <div className="data-set">
          <img
            className="icons"
            src="https://img.icons8.com/color/48/000000/virus.png"
            alt=""
          />
          <h2 className="Name">
            Active cases <br />
            <div style={{ color: "red" }}>{covid.active_cases}</div>
          </h2>
        </div>
        <div className="data-set">
          <img
            className="icons"
            src="https://img.icons8.com/emoji/48/000000/hospital-emoji.png"
            alt=""
          />
          <h2 className="Name">
            Serious critical: <br />
            <div style={{ color: "red" }}>{covid.serious_critical}</div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Render;
