import './Button.css'

export default function Button({ children, isDisabled, main, ...props }) {
  return (
    <button
      className={`button${main ? ' main' : ''}`}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  )
}
