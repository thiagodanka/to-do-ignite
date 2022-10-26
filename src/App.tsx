import { useState } from 'react'
import { Header } from './components/header/Header'
import { Tasks } from './components/tasks/Tasks'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Tasks />
    </>
  )
}

export default App
