
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Task1 from './ReactRouter1/Task1'
import Task2 from './ReactRouter2/Task2'
import Task3 from './ReactRouter3/Task3'
import Task4 from './ReactRouter4/Task4'
import Task5 from './ReactRouter5/Task5'
import Task7 from './ReactRouter7/Task7'

function App() {
  return (
    <div>
      <nav style={{ padding: '20px' }}>
        <Link to="/task1">Task1</Link> |{" "}
        <Link to="/task2">Task2</Link> |{" "}
        <Link to="/task3">Task3</Link> |{" "}
        <Link to="/task4">Task4</Link> |{" "}
        <Link to="/task5">Task5</Link> |{" "}
        <Link to="/task7">Task7</Link>
      </nav>

      <Routes>
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
        <Route path="/task7" element={<Task7 />} />
      </Routes>
    </div>
  )
}

export default App;
