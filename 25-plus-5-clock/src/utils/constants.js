export const TIMING_TYPES = {
  session: 'SESSION',
  break: 'BREAK',
}

export const timeFormatter = (timeLeft) => {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft - minutes * 60
  const formattedSeconds = String(seconds).padStart(2, '0')
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
  return `${formattedMinutes}:${formattedSeconds}`
}