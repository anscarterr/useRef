import { useState, useRef, useEffect } from 'react'

function Task3() {
  const [value, setValue] = useState('')
  const prevValueRef = useRef('')

  useEffect(() => {
    prevValueRef.current = value
  }, [value])

  return (
    <div style={{ padding: '20px' }}>
      <h2>Задание 3: Сохранение предыдущего значения</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите текст"
      />
      <div>
        <p><strong>Текущее значение:</strong> {value}</p>
        <p><strong>Предыдущее значение:</strong> {prevValueRef.current}</p>
      </div>
    </div>
  )
}

export default Task3
