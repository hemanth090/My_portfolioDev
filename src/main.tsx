import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './routes/Layout'
import { Home } from './routes/Home'
import { CaseStudy } from './routes/CaseStudy'
import { NotFound } from './routes/NotFound'
import './index.css'

// The router (ScrollToHash) owns scroll position.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

const container = document.getElementById('root')
if (!container) throw new Error('Root element #root not found')

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
