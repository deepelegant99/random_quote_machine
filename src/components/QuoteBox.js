// Shortcut rafc for arrow function...

import React from "react";
import { AuthorBox } from "./AuthorBox";
import { NewQuoteBox } from "./NewQuoteBox";
import { TextBox } from "./TextBox";
import { TwitterBox } from "./TwitterBox";

const random = Math.floor(Math.random() * 1643) // Because api returns 1643 quotes with authors

export const QuoteBox = () => {
  const [quote, setQuote] = React.useState('')
  const [colour, setColour] = React.useState('lightblue')
  const [author, setAuthor] = React.useState('')
  const api_url = 'https://type.fit/api/quotes'

  async function getapi(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data[random].text + '  -' + data[random].author)
    setQuote(data[random].text)
    setAuthor(data[random].author)
  }
  getapi(api_url)

  document.getElementById('root').style.backgroundColor = colour

  return (
    <div id="quote-box" style={{ position: 'relative' }}>
      <TextBox quote={quote} />
      <AuthorBox author={author} />
      <NewQuoteBox setColour={setColour} />
      <TwitterBox />
    </div>
  )
}
