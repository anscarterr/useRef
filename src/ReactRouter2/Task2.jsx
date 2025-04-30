import { useRef } from 'react'

function Task2() {
  const counterRef = useRef(0)

  const handleClick = () => {
    counterRef.current += 1
    console.log(counterRef.current)
  }

  return (
    <div style={{ padding: '20px', marginBottom: '20px' }}>
      <h2>Задание 2: Счётчик без ререндера</h2>
      <button onClick={handleClick}>Увеличить счётчик</button>
    </div>
  )
}

export default Task2