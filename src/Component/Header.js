import React, { useState, useEffect } from "react";

function Header() {
  // const [number, setNumber] = useState(initNumber);
  //const [_date, setDate] = useState((new Date()).toString());

  return (
    <div className="header">
      <div className="main_header">
        <div className="logo"></div>
      </div>

      <div className="menu">
        <div onClick="go('section1')">Introduce</div>
        <div onClick="go('section2')">Menu</div>
        <div onClick="go('section3')">Contact</div>
        <div onClick="go('section4')">Map</div>
      </div>
    </div>
  );
}

export default Header;
