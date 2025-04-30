import { useRef, useState, useEffect } from 'react'

function Task4() {
  const [seconds, setSeconds] = useState(0)
  const intervalRef = useRef(null)

  const startTimer = () => {
    if (intervalRef.current !== null) return // не запускаем повторно
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  const resetTimer = () => {
    stopTimer()
    setSeconds(0)
  }

  // Очистка при размонтировании
  useEffect(() => {
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h2>Задание 4: Таймер</h2>
      <h3>{seconds} сек.</h3>
      <button onClick={startTimer}>Старт</button>
      <button onClick={stopTimer}>Стоп</button>
      <button onClick={resetTimer}>Сброс</button>
    </div>
  )
}

export default Task4
