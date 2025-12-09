import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TaskApp } from './_TaskApp'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskApp />
  </StrictMode>,
)
