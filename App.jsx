import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const dateTime = format(currentTime, 'MMMM do, yyyy - h:mm:ss a')

  return (
    <div className="app">
      <p className="clock">{dateTime}</p>
    </div>
  )
}

export default App