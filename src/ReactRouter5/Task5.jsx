import { useMemo, useState } from 'react'

function heavyFactorial(n) {
  console.log('Вычисление факториала...')
  if (n < 0) return 0
  let result = 1
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < 1_000_000; j++) {}
    result *= i
  }
  return result
}

function Task5() {
  const [number, setNumber] = useState(1)

  const factorial = useMemo(() => heavyFactorial(number), [number])

  return (
    <div style={{ padding: '20px' }}>
      <h2>Задание 5: Мемоизация тяжёлой функции</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        min="0"
      />
      <p>Факториал: {factorial}</p>
    </div>
  )
}

export default Task5
