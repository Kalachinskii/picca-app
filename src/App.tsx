import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>App</h1>
      {/* обезательно исполнение интерфейса - children = Кнопка*/}
      <Button onClick={() => console.log('клик')}>Кнопка</Button>
    </>
  )
}

export default App
