import React from 'react';

export const NewQuoteBox = ({ setColour, setRandom }) => {
  const handleSubmit = () => {
    let random = Math.floor(Math.random() * 1643);
    setColour('lightgreen')
    setRandom(random);
  }
  return (
    <button onClick={handleSubmit} id="new-quote">
      New quote
    </button>
  )
}
