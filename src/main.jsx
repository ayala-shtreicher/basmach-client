import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserProvider from './context/userContext.jsx'
import ResortProvider from './context/resortContext.jsx'
import OrderProvider from './context/orderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OrderProvider>
      <UserProvider>
        <ResortProvider>
          <App />
        </ResortProvider>
      </UserProvider>
    </OrderProvider>
  </React.StrictMode>,
)
