import './App.css'
import { useState, useRef, useEffect } from 'react'
import { STARTING_TEXT } from './consts'
import { saveMarkdownToStorage } from './logic/storage'
import Markdown from 'marked-react'

export default function App() {
  const [text, setText] = useState(
    localStorage.getItem('markdown') || STARTING_TEXT
  )
  const textRef = useRef()

  function handleChange() {
    setText(textRef.current.value)
  }

  useEffect(() => {
    saveMarkdownToStorage({ text })
  }, [text])

  return (
    <>
      <div className='container'>
        <div className='column'>
          <div className='ace_editor ace_chrome'>
            <textarea
              onChange={handleChange}
              name='editor-mk'
              id='editor'
              autoCorrect='off'
              autoCapitalize='off'
              spellCheck='false'
              aria-autocomplete='both'
              role='textbox'
              ref={textRef}
              value={text}
            ></textarea>
          </div>
        </div>

        <div id='preview' className='column markdown-body preview-wrapper'>
          <Markdown>{text}</Markdown>
        </div>
      </div>
    </>
  )
}
