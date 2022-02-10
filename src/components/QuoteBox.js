import React, { useState, useEffect } from "react";
import { AuthorBox } from "./AuthorBox";
import { NewQuoteBox } from "./NewQuoteBox";
import { TextBox } from "./TextBox";
import { TwitterBox } from "./TwitterBox";

const random = Math.floor(Math.random() * 1643); // Because api returns 1643 quotes with authors
const api_url = "https://type.fit/api/quotes";

export const QuoteBox = () => {
  const [colour, setColour] = useState("lightblue");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [rand, setRandom] = useState(random);

  useEffect(() => {
    fetch(api_url)
      .then((results) => results.json())
      .then((data) => {
        setQuote(data[rand].text);
        setAuthor(data[rand].author);
      });
  }, [colour, rand]);

  document.getElementById("root").style.backgroundColor = colour;

  return (
    <div id="quote-box" style={{ position: "relative" }}>
      <TextBox quote={quote} />
      <AuthorBox author={author} />
      <NewQuoteBox setColour={setColour} setRandom={setRandom} />
      <TwitterBox colour={colour} />
    </div>
  );
};
