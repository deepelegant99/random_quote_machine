import React from "react";

export const NewQuoteBox = ({ color, setColour, setRandom }) => {
  const handleSubmit = () => {
    let random = Math.floor(Math.random() * 1643);
    let randomColor = Math.floor(Math.random() * 5);
    let newColor = Array(5);
    newColor[0] = "#abc4ff";
    newColor[1] = "#adf7b6";
    newColor[2] = "#65cbe9";
    newColor[3] = "#eac4d5";
    newColor[4] = "#adf7b6";
    setColour(newColor[randomColor]);
    setRandom(random);
  };
  return (
    <button style={{color:color, border: `2px solid {color}`, backgroundColor: 'gray'}} onClick={handleSubmit} id="new-quote">
      New quote
    </button>
  );
};
