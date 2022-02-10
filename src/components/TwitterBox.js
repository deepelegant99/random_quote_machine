import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTumblrSquare,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";

export const TwitterBox = ({ colour }) => {
  return (
    // <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet">
    //   Twitter
    // </a>
    <div style={{ position: "absolute", left: "40px", bottom: "20px" }}>
      {/* <a target='_blank' href="twitter.com/intent/tweet"><FontAwesomeIcon icon={faTwitterSquare} style={styles.icon} /></a> */}
      <a target="_blank" href="https://twitter.com/intent/tweet">
        <FontAwesomeIcon
          icon={faTwitterSquare}
          style={{ color: colour, width: "1.8em", height: "auto" }}
        />
      </a>

      {/* <FontAwesomeIcon icon={faTumblrSquare} style={styles.icon} /> */}
    </div>
  );
};

/*const styles = { icon: { fontSize: "50px", margin: "2px" } };*/
