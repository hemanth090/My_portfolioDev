import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext'
import { normalizeLegacyPath } from './lib/legacyRedirect'
import './index.css'
import App from './App.tsx'

// Runs before render: the deep-link hook reads location.hash on mount.
normalizeLegacyPath()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
