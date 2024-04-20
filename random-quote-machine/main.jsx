import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './src/App'

// Creamos nuestro punto de entrada
const root = createRoot(document.getElementById('app'))

// Renderizamos nuestro componente
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
