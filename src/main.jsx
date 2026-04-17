import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Components/Routes/Routes.jsx'
import Context from './Components/Context/Context.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Context>
      <RouterProvider router={router}/>
    </Context>
  </StrictMode>,
)
