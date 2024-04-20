import { useState, useEffect, useCallback } from 'react'
import { TwitterIcon, TumblrIcon } from '../Icons/Icons.jsx'
import QuoteText from './QuoteText.jsx'
import QuoteAuthor from './QuoteAuthor.jsx'
import SectionButtons from './SectionButtons.jsx'
import Button from './Button.jsx'
import QuoteBox from './QuoteBox.jsx'
import { QUOTES_API_URL } from '../services/quotes.js'

export default function InspirationGenerator() {
  const [index, setIndex] = useState(0)
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch(QUOTES_API_URL)
      .then(res => res.json())
      .then(data => setQuotes(data.quotes))
  }, [])

  const quote = quotes[index]
  const twitterURL =
    'https://twitter.com/intent/tweet?hashtags=quotes&text=' +
    encodeURIComponent('"' + quote?.quote + '" ' + quote?.author)
  const tumblrURL =
    'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=' +
    encodeURIComponent(quote?.author) +
    '&content=' +
    encodeURIComponent(quote?.quote) +
    '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'

  function nextQuote() {
    setIndex((index + 1) % quotes.length)
  }

  return (
    <>
      <QuoteBox>
        <QuoteText quote={quote?.quote} />
        <QuoteAuthor author={quote?.author} />
        <SectionButtons>
          <Button id='tweet-quote' title='Tweet this quote!' href={twitterURL}>
            <TwitterIcon />
          </Button>
          <Button
            id='tumblr-quote'
            title='Post this quote on tumblr!'
            href={tumblrURL}
          >
            <TumblrIcon />
          </Button>
          <Button newQuote onClick={nextQuote}>
            New quote
          </Button>
        </SectionButtons>
      </QuoteBox>
    </>
  )
}
