import './Button.css'

export default function Button({ children, addInput }) {
  const esOperador = valor => {
    return isNaN(valor) && valor != '.' && valor != '='
  }

  return (
    <button
      className={`button-container ${esOperador(children) ? 'operator' : ''}${
        children === '=' ? 'equal' : ''
      }`.trimEnd()}
      onClick={() => addInput(children)}
    >
      {children}
    </button>
  )
}
