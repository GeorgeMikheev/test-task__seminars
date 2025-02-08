import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {APIProvider} from './context/APIContext'
import App from './Components/App/App'
import './index.sass'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <APIProvider>
      <App />
    </APIProvider>
  </StrictMode>,
)
