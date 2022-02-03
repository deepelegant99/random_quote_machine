import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export const TextBox = () => {
  return (
    <div id="text">
      <span style={{ marginRight: '10px' }}>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </span>
      This is a random quote,
      <br />
      This is second line.
      <br />
      <br />
    </div>
  )
}
