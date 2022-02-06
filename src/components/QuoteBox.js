// Shortcut rafc for arrow function...

import React from "react";
import { AuthorBox } from "./AuthorBox";
import { NewQuoteBox } from "./NewQuoteBox";
import { TextBox } from "./TextBox";
import { TwitterBox } from "./TwitterBox";

export const QuoteBox = () => {

    const [quote, setQuote] = React.useState('');
    const [colour, setColour] = React.useState('lightblue');
    const [author, setAuthor] = React.useState('');

  const api_url ="https://type.fit/api/quotes";
    
  let data;
  
    async function getapi(url)
    {
      // url.preventDefault();

      const response = await fetch(url);
      data =await response.json();
      console.log(data);
      const random = Math.floor(Math.random() * 1643);
      console.log(data[0].text + "  -"+data[0].author);

      setQuote(data[0].text);
      setAuthor(data[0].author);

    }

    getapi(api_url);

  
  // document.body.style.backgroundColor = colour
  document.getElementById('root').style.backgroundColor = colour

  return (
    <div id="quote-box" style={{ position: 'relative' }}>
      <TextBox quote = {quote}/>
      <AuthorBox author ={author}/>
      <NewQuoteBox setColour={setColour} />
      <TwitterBox />
    </div>
  )
};
