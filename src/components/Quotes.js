import React from 'react';
import axios from 'axios';

function Quotes() {
  const [quote, setQuote] = React.useState();
  const getQuote = () => {
    const request = axios.get(`https://quote-garden.herokuapp.com/quotes/random`)

    request.then(response => {
      const randomQuote = response.data.quoteText;
      setQuote(randomQuote);
    })
  }
  React.useEffect(() => {
    getQuote();
  }, []);
  console.log(quote)

  return (
    <div>
      {quote && (
        <>
          <p>{quote.quoteText}</p>
          <p>{quote.quoteTAuthor}</p>
        </>

      )}
      <p>{quote}</p>
      <p><button onClick={getQuote}>Inspire Me!</button></p>
    </div>
  )
}

export default Quotes