import React from 'react'
import { AuthorBox } from './AuthorBox'
import { NewQuoteBox } from './NewQuoteBox'
import { TextBox } from './TextBox'
import { TwitterBox } from './TwitterBox'

const random = Math.floor(Math.random() * 1643) // Because api returns 1643 quotes with authors
const api_url = 'https://type.fit/api/quotes'

export const QuoteBox = () => {
  const [colour, setColour] = React.useState('lightblue')
  const [quote, setQuote] = React.useState('')
  const [author, setAuthor] = React.useState('')

  React.useEffect(() => {
    fetch(api_url)
      .then((results) => results.json())
      .then((data) => {
        setQuote(data[random].text)
        setAuthor(data[random].author)
      })
  })

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
