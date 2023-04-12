import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ toggleChangeColor, childrenColor }) {
  function clickColorChange() {
    const newColor = getRandomColor();
    toggleChangeColor(newColor)
  }

  return <div 
    onClick={clickColorChange}
    className="child" 
    style={{ backgroundColor: childrenColor }} 
  />;
}

export default Child;
