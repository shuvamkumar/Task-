import React, { useEffect } from "react";

function LeftSection() {
  const active = (e) => {
    var x = document.getElementsByClassName("tab");
    for (var i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "";
      x[i].style.color = "black";
    }
    var tablink = document.getElementById(e);
    tablink.style.backgroundColor = "#e1e6ff";
    tablink.style.color = "#405cd2";
  };

  useEffect(() => {
    var holiday = document.getElementById("holiday");
    holiday.style.backgroundColor = "#e1e6ff";
    holiday.style.color = "#405cd2";
  }, []);

  return (
    <section className="leftSection">
      <a
        href="#"
        id="general"
        className="tab"
        onClick={() => active("general")}
      >
        General
      </a>
      <a
        href="#"
        id="holiday"
        className="tab"
        onClick={() => active("holiday")}
      >
        Holiday
      </a>
      <a href="#" id="leave" className="tab" onClick={() => active("leave")}>
        Leave
      </a>
    </section>
  );
}

export default LeftSection;
