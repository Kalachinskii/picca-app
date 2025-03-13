import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* данное приложение будет браузерным - т.е. работа с навигацией */}
      <App />
  </StrictMode>,
)
