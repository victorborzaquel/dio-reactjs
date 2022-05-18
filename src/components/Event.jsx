import { useState } from "react"

export function Event() {
  const [eventCreated, setEventCreated] = useState(0)

  function handleAddEvent() {
    setEventCreated(curr => curr + 1)
  }

  function handleChangeCounter(e) {
    console.log(e.target.value);
  }

  return (
    <div className='container'>
      <input onChange={handleChangeCounter} value={eventCreated}></input>
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
  )
}