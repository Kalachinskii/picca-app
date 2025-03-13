import { MouseEvent, useState } from 'react'
import Button from './components/button/Button'
import Input from './components/Input/Input';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';

// не загрезняем JSX
const router = createBrowserRouter([
  {
  path: '/',
  element: <Menu />
  }, {
    path: '/cart',
    element: <Cart />
  }, {
    path: '*',
    element: <Error />
  }
]);

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
      {/* работает но отрисовывает и загружает заного */}
      <div>
        <a href="/">Меню</a>
        <a href="/cart">Корзина</a>
      </div>
      {/* подключаем роутер */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
