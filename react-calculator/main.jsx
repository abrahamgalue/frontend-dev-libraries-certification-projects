import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './src/App'

// Creamos el punto de entrada
const root = createRoot(document.getElementById('app'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
