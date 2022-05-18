import { useState } from "react"

export function Render() {
  const [isTrue, setIsTrue] = useState(true)

  function toggleIsTrue() {
    setIsTrue(curr => !curr)
  }

  const ToggleTitle = () => {
    if (!isTrue) return null

    return (
      <h1>IS TRUE</h1>
    )
  }

  return (
    <div>
      {isTrue && <p>É verdadeiro</p>}

      <ToggleTitle />

      <button onClick={toggleIsTrue}>Trocar</button>
    </div>
  )
}