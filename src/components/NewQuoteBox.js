import React from 'react';

export const NewQuoteBox = ({ setColour, setRandom }) => {
  const handleSubmit = () => {
    setColour('lightgreen')
    const random = Math.floor(Math.random() * 1643);
    setRandom(random);
  }
  return (
    <button onClick={handleSubmit} id="new-quote">
      New quote
    </button>
  )
}
