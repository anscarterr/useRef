import { useRef } from 'react'

function Task1() {
  const inputRef = useRef(null)

  const handleClick = () => {
    inputRef.current.focus()
  }

  return (
    <div style={{ padding: '20px', marginBottom: '20px' }}>
      <h2>Задание 1: Фокус на поле ввода</h2>
      <input ref={inputRef} type="text" placeholder="Введите текст" />
      <button onClick={handleClick}>Фокус на поле ввода</button>
    </div>
  )
}

export default Task1
