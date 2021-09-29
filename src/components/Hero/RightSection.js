import React, { useEffect, useState } from "react";

function RightSection() {
  const list = [
    { holidayName: "Rath Yatra", type: "Optional", date: "12 July, 2021" },
    { holidayName: "Rath Yatra", type: "Optional", date: "12 July, 2021" },
    { holidayName: "Rath Yatra", type: "Optional", date: "12 July, 2021" },
    { holidayName: "Rath Yatra", type: "Optional", date: "12 July, 2021" },
    { holidayName: "Rath Yatra", type: "Optional", date: "12 July, 2021" },
    { holidayName: "Rath Yatra", type: "Optional", date: "12 July, 2021" },
    { holidayName: "Rath Yatra", type: "Optional", date: "12 July, 2021" },
    { holidayName: "Rath Yatra", type: "Optional", date: "12 July, 2021" },
    { holidayName: "Rath Yatra", type: "Optional", date: "12 July, 2021" },
    { holidayName: "Rath Yatra", type: "Optional", date: "12 July, 2021" },
  ];
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState({});
  const openModal = () => {
    document.getElementById("modal").style.display = "block";
  };
  useEffect(() => {
    var dropDown = document.getElementById("Year");
    var currentYear = new Date().getFullYear();
    for (var i = 2000; i <= currentYear; i++) {
      var option = document.createElement("OPTION");
      option.innerHTML = i;
      option.value = i;
      if (i === currentYear) {
        option.setAttribute("selected", "selected");
      }
      dropDown.appendChild(option);
    }
  }, []);
  useEffect(() => {
    setData(list);
    setCounter(data.length);
  }, [data]);
  return (
    <section className="rightSection">
      <header className="header">
        <div>
          <h2>Holiday</h2>
          <p>
            Assign the holidays that you want to give to your employees for the
            year
          </p>
        </div>
        <div className="dropdown">
          <img src="/Assets/calender.svg" alt="" />
          <label htmlFor="Year">
            <span>Year</span>
          </label>
          <select name="Year" id="Year"></select>
        </div>
      </header>
      <div className="details">
        <p>List ({counter})</p>
        <div className="filterSection">
          <span
            onClick={() => {
              openModal();
            }}
          >
            + Add New
          </span>
          <label htmlFor="filter">
            <i class="fas fa-filter"></i> Filter
          </label>
          <select name="filter" id="filter">
            <option value="All" selected>
              All
            </option>
            <option value="All" selected>
              All
            </option>
            <option value="All" selected>
              All
            </option>
          </select>
        </div>
      </div>
      <main>
        <div className="tableHead">
          <p>Name</p>
          <p>Type</p>
          <p>Date</p>
        </div>
        <div className="wrapper">
          {list.map((info) => {
            return (
              <div className="tableContent">
                <p>{info.holidayName}</p>
                {info.type === "Optional" ? (
                  <span>{info.type}</span>
                ) : (
                  <p>{info.type}</p>
                )}
                <div className="dateSection">
                  <p>{info.date}</p>
                  <i class="fas fa-pencil-alt"></i>
                  <i class="fas fa-trash"></i>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
}

export default RightSection;
