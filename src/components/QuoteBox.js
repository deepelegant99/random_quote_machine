// Shortcut rafc for arrow function...

import React from "react";
import { AuthorBox } from "./AuthorBox";
import { NewQuoteBox } from "./NewQuoteBox";
import { TextBox } from "./TextBox";
import { TwitterBox } from "./TwitterBox";

export const QuoteBox = () => {
  return (
    <div id="quote-box">
      This is quote box
      <TextBox />
      <AuthorBox />
      <NewQuoteBox />
      <TwitterBox />
    </div>
  );
};
