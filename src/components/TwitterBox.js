import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTumblrSquare,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons'

export const TwitterBox = () => {
  return (
    // <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet">
    //   Twitter
    // </a>
    <div style={{ position: 'absolute', left: '40px', bottom: '20px' }}>
      <FontAwesomeIcon icon={faTwitterSquare} style={styles.icon} />
      <FontAwesomeIcon icon={faTumblrSquare} style={styles.icon} />
    </div>
  )
}

const styles = { icon: { fontSize: '35px', margin: '2px' } }
