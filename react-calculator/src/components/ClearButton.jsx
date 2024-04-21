import './ClearButton.css'

export default function ClearButton({ children, clearInput }) {
  return (
    <button id='clear' className='button-clear' onClick={clearInput}>
      {children}
    </button>
  )
}
