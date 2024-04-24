import React from 'react'

function AudioDrum({ audio }) {
  const playSond = audio => {
    document.getElementById(audio.key).play().catch(console.error)

    document.getElementById('display').innerText = audio.title
  }

  return (
    <button
      id={`drum-${audio.key}`}
      className='drum-pad'
      onClick={() => playSond(audio)}
    >
      {audio.key}
      <audio src={audio.url} id={audio.key} className='clip'></audio>
    </button>
  )
}

export default AudioDrum
