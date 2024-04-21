import './App.css'
import Button from './components/Button'
import Display from './components/Display'
import ClearButton from './components/ClearButton'
import { useState } from 'react'
import { evaluate } from 'mathjs'

const errorMessages = {
  divideByZero: 'Cannot be divided by zero',
  emptyInput: ' Please enter values for calculations',
}

export default function App() {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const NO_DIGITS = /\D/
  const DIVIDE_BY_ZERO = /(\d+[\/]0)/g
  const inputLength = input.length
  const lastInputElement = input[input.length - 1]

  const addInput = val => {
    setError('')
    // El primer elemento no puede ser un operador
    if (NO_DIGITS.test(val) && inputLength === 0) return

    // El primer elemento no puede ser un cero
    if (val === '0' && inputLength === 0) return

    // El nuevo elemento no puede ser otro operador
    if (NO_DIGITS.test(val) && NO_DIGITS.test(lastInputElement)) {
      setInput(input.substring(0, inputLength - 1) + val)
      return
    }

    setInput(input + val)
  }

  const evaluateResult = () => {
    // No puede estar vacio el input
    if (!input) {
      setError(errorMessages.emptyInput)
      return
    }

    // NO se puede dividir por cero
    if (DIVIDE_BY_ZERO.test(input)) {
      setError(errorMessages.divideByZero)
      setInput('')
      return
    }

    // No puede haber 1 solo operando y 1 solo operador
    if (NO_DIGITS.test(lastInputElement)) {
      setInput(input.substring(0, inputLength - 1))
    } else {
      setInput(String(evaluate(input)))
      setError('')
    }
  }

  return (
    <div className='main'>
      <div className='container'>
        <Display input={input ? input : '0'} />
        <div className='row'>
          <Button id='one' addInput={addInput}>
            1
          </Button>
          <Button id='two' addInput={addInput}>
            2
          </Button>
          <Button id='three' addInput={addInput}>
            3
          </Button>
          <Button id='add' addInput={addInput}>
            +
          </Button>
        </div>
        <div className='row'>
          <Button id='four' addInput={addInput}>
            4
          </Button>
          <Button id='five' addInput={addInput}>
            5
          </Button>
          <Button id='six' addInput={addInput}>
            6
          </Button>
          <Button id='subtract' addInput={addInput}>
            -
          </Button>
        </div>
        <div className='row'>
          <Button id='seven' addInput={addInput}>
            7
          </Button>
          <Button id='eight' addInput={addInput}>
            8
          </Button>
          <Button id='nine' addInput={addInput}>
            9
          </Button>
          <Button id='multiply' addInput={addInput}>
            *
          </Button>
        </div>
        <div className='row'>
          <Button id='equals' addInput={evaluateResult}>
            =
          </Button>
          <Button id='zero' addInput={addInput}>
            0
          </Button>
          <Button id='decimal' addInput={addInput}>
            .
          </Button>
          <Button id='divide' addInput={addInput}>
            /
          </Button>
        </div>
        <div className='row'>
          <ClearButton
            clearInput={() => {
              setInput('')
              setError('')
            }}
          >
            Clear
          </ClearButton>
        </div>
      </div>
      {error && (
        <div className='error-message'>
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}
