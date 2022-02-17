import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export const TextBox = ({ color, quote }) => {
  return (
    <div id="text">
      {/* <span style={{ marginRight: "10px" }}>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </span> */}
      <p style={{color:color}}>{quote}</p>
      <br />
      <br />
    </div>
  );
};
