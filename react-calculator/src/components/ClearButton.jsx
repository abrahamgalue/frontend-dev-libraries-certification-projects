import './ClearButton.css'

export default function ClearButton({ children, clearInput }) {
  return (
    <div id='clear' className='button-clear' onClick={clearInput}>
      {children}
    </div>
  )
}
