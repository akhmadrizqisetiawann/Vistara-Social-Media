import { useState } from 'react'
import './assets/style.css'
import Header from './components/Header.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    </>
  )
}

export default App
