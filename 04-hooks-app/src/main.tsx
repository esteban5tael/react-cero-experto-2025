import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { HooksApp } from './_HooksApp'

import './css/index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HooksApp />
  </StrictMode>,
)
