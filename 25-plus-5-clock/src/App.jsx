import './App.css'
import { useState, useEffect } from 'react'
import Button from './Components/Button'
import { TIMING_TYPES, timeFormatter } from './utils/constants'
import {
  PauseIcon,
  PlayIcon,
  DownIcon,
  UpIcon,
  RestartIcon,
} from './icons/Icons'

export default function App() {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timeLeft, seTtimeLeft] = useState(1500)
  const [timingType, setTimingtype] = useState(TIMING_TYPES.session)
  const [play, setPlay] = useState(false)

  const timeout = setTimeout(() => {
    if (timeLeft && play) {
      seTtimeLeft(timeLeft - 1)
    }
  }, 1000)

  const handleBreakIncrease = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1)
    }
  }

  const handleBreakDecrease = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1)
    }
  }

  const handleSessionIncrease = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1)
      seTtimeLeft(timeLeft + 60)
    }
  }

  const handleSessionDecrease = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1)
      seTtimeLeft(timeLeft - 60)
    }
  }

  const handleReset = () => {
    clearTimeout(timeout)
    setPlay(false)
    seTtimeLeft(1500)
    setBreakLength(5)
    setSessionLength(25)
    setTimingtype(TIMING_TYPES.session)
    const audio = document.getElementById('beep')
    audio.pause()
    audio.currentTime = 0
  }

  const handlePlay = () => {
    clearTimeout(timeout)
    setPlay(!play)
  }

  const resetTimer = () => {
    const audio = document.getElementById('beep')
    if (!timeLeft && timingType === TIMING_TYPES.session) {
      seTtimeLeft(breakLength * 60)
      setTimingtype(TIMING_TYPES.break)
      audio.play()
    }
    if (!timeLeft && timingType === TIMING_TYPES.break) {
      seTtimeLeft(sessionLength * 60)
      setTimingtype(TIMING_TYPES.session)
      audio.pause()
      audio.currentTime = 0
    }
  }

  const clock = () => {
    if (play) {
      timeout
      resetTimer()
    } else {
      clearTimeout(timeout)
    }
  }

  useEffect(() => {
    clock()
  }, [play, timeLeft, timeout])

  const title = timingType === TIMING_TYPES.session ? 'Session' : 'Break'

  return (
    <div>
      <div className='container'>
        <h2>25 + 5 Clock</h2>
        <div className='length-container'>
          <div className='break-container'>
            <h3 id='break-label' className='length-header'>
              Break Length
            </h3>
            <div className='break-buttons'>
              <Button
                isDisabled={play}
                onClick={handleBreakIncrease}
                id='break-increment'
              >
                <UpIcon />
              </Button>
              <strong id='break-length' className='length-text'>
                {breakLength}
              </strong>
              <Button
                isDisabled={play}
                onClick={handleBreakDecrease}
                id='break-decrement'
              >
                <DownIcon />
              </Button>
            </div>
          </div>
          <div className='session-container'>
            <h3 id='session-label' className='length-header'>
              Session Length
            </h3>
            <div className='session-buttons'>
              <Button
                isDisabled={play}
                onClick={handleSessionIncrease}
                id='session-increment'
              >
                <UpIcon />
              </Button>
              <strong id='session-length' className='length-text'>
                {sessionLength}
              </strong>
              <Button
                isDisabled={play}
                onClick={handleSessionDecrease}
                id='session-decrement'
              >
                <DownIcon />
              </Button>
            </div>
          </div>
        </div>
        <div className='timer-container'>
          <div className='timer'>
            <h2 id='timer-label'>{title}</h2>
            <div className='circle-container'>
              <h3 id='time-left'>{timeFormatter(timeLeft)}</h3>
            </div>
          </div>
          <div className='buttons-container'>
            <Button
              main
              onClick={handlePlay}
              id='start_stop'
              title={play ? 'Pause session' : 'Resume session'}
            >
              {play ? <PauseIcon /> : <PlayIcon />}
            </Button>
            <Button onClick={handleReset} id='reset' title='Reset session'>
              <RestartIcon />
            </Button>
          </div>
        </div>
      </div>
      <audio
        id='beep'
        preload='auto'
        src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
      />
    </div>
  )
}
