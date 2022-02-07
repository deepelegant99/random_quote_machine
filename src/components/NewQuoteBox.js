import React from 'react';

export const NewQuoteBox = ({ setColour, setRandom }) => {
  const handleSubmit = () => {
    let random = Math.floor(Math.random() * 1643);
    let randomColor = Math.floor(Math.random() * 5);
    let newColor=Array(5);
    newColor[0]="black";
    newColor[1]="lightgreen";
    newColor[2]="lightblue";
    newColor[3]="red";
    newColor[4]="orange";
    setColour(newColor[randomColor])
    setRandom(random);
  }
  return (
    <button onClick={handleSubmit} id="new-quote">
      New quote
    </button>
  )
}
