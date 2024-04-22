import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/App.jsx'

// Creamos nuestro punto de entrada
const root = createRoot(document.getElementById('app'))

// Renderizamos nuestro componente
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
