// Shortcut rafc for arrow function...

import React from "react";
import { AuthorBox } from "./AuthorBox";
import { NewQuoteBox } from "./NewQuoteBox";
import { TextBox } from "./TextBox";
import { TwitterBox } from "./TwitterBox";

export const QuoteBox = () => {
  const [colour, setColour] = React.useState('lightblue')
  // document.body.style.backgroundColor = colour
  document.getElementById('root').style.backgroundColor = colour

  return (
    <div id="quote-box" style={{ position: 'relative' }}>
      <TextBox />
      <AuthorBox />
      <NewQuoteBox setColour={setColour} />
      <TwitterBox />
    </div>
  )
};
