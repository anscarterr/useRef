import { useState, useMemo } from 'react'

const products = [
  { id: 1, name: 'Товар A', price: 300 },
  { id: 2, name: 'Товар B', price: 100 },
  { id: 3, name: 'Товар C', price: 200 },
]

function Task7() {
  const [sortByPrice, setSortByPrice] = useState(false)

  const sortedProducts = useMemo(() => {
    console.log('Сортировка массива...')
    if (!sortByPrice) return products
    return [...products].sort((a, b) => a.price - b.price)
  }, [sortByPrice])

  return (
    <div style={{ padding: '20px' }}>
      <h2>Задание 7: Сортировка массива</h2>
      <button onClick={() => setSortByPrice((prev) => !prev)}>
        Сортировать по цене
      </button>
      <ul>
        {sortedProducts.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price}₸
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Task7
