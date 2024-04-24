import './App.css'
import { useEffect } from 'react'
import { audioClips } from './mocks/audios'
import AudioDrum from './components/AudioDrum'

function App() {
  const onKeyDown = e => {
    const audio = audioClips.find(audio => audio.key === e.key.toUpperCase())
    if (!audio) return

    document.getElementById(`drum-${audio.key}`).click()
    document.getElementById(`drum-${audio.key}`).focus()
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])

  return (
    <>
      <h1 className='header-title'>Drum Machine</h1>
      <div id='drum-machine' className='container'>
        {audioClips.map(audio => (
          <AudioDrum audio={audio} key={audio.key} />
        ))}
        <div id='display' className='display-text'></div>
      </div>
    </>
  )
}

export default App
