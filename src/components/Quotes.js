import React from 'react';
import axios from 'axios';
import { Button } from 'grommet';
import { Card } from 'react-bootstrap';

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
        </>
      )}

      <p>{quote}</p>
      <p>
        <Button
          label="Inspire Me!"
          onClick={getQuote}
        />

      </p>
    </div>
  )
}

export default Quotes