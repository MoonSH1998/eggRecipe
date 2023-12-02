import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Component/Header";
import Section1 from "./Component/Section1";
import Section2 from "./Component/Section2";
import Section3 from "./Component/Section3";
import Section4 from "./Component/Section4";
import "./css/app.css";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </div>
  );
}
