import { MouseEvent, useState } from 'react'
import Button from './components/button/Button'
import Input from './components/Input/Input';

function App() {
  // типизируем
  const [counter, setCounter] = useState<number>(0)

  // MouseEvent - в реакте события синтетические
  // т.е. не настоящие из за виртуального дом
  // вследствии чего их надо импортировать с реакта
  const addCouner = (e: MouseEvent) => {
    console.log(e);
  }

  return (
    <>
      {/* обезательно исполнение интерфейса - children = Кнопка*/}
      {/* small - по дефолту - можно не передавать */}
      <Button onClick={addCouner}>Кнопка</Button>
      {/* appearence - принемает только либо big | small */}
      <Button appearence='big' onClick={addCouner}>Кнопка</Button>
      <Input placeholder='Email'/>
    </>
  )
}

export default App
