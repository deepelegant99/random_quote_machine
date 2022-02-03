import React from 'react';

export const NewQuoteBox = ({ setColour }) => {
  const handleSubmit = () => {
    setColour('lightgreen')
  }
  return (
    <button onClick={handleSubmit} id="new-quote">
      New quote
    </button>
  )
}
