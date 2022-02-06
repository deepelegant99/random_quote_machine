import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export const TextBox = (props) => {

  /*const [quote, setQuote] = React.useState('');

  const api_url ="https://zenquotes.io/api/quotes/";
    
  let data;
    async function getapi(url)
    {
      const response = await fetch(url);
      data = await response.json();
      console.log(data[0].q +" -"+data[0].a);
      setQuote(data[0].q);
    }

    getapi(api_url);*/

  return (
    <div id="text">
      <span style={{ marginRight: '10px' }}>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </span>
      {props.quote}
      <br />
      <br />
    </div>
  )
}
