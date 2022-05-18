import { useState } from 'react'
import '../styles/state.css'

export function State() {
  const [value, setValue] = useState(0)
  const price = 12

  function handleDecreaseValue() {
    if (value <= 0) return

    setValue(curr => curr - 1)
  }

  function handleIncreaseValue() {
    setValue(curr => curr + 1)
  }

  return (
    <div className='container'>
      <button
        onClick={handleDecreaseValue}
        className={value === 0 ? 'normal' : 'zero'}
      >
        -
      </button>
      <p>{value}</p>
      <button
        onClick={handleIncreaseValue}
      >
        +
      </button>
      <p>Value: {value * price}</p>
    </div>
  )
}