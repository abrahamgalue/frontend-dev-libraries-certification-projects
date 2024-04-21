import './Button.css'

export default function Button({ children, addInput }) {
  const esOperador = valor => {
    return isNaN(valor) && valor != '.' && valor != '='
  }

  return (
    <div
      className={`button-container ${esOperador(children) ? 'operator' : ''}${
        children === '=' ? 'equal' : ''
      }`.trimEnd()}
      onClick={() => addInput(children)}
    >
      {children}
    </div>
  )
}
