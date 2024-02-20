import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from './context/productcontex.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FilterContextProvider } from './context/filter_context.jsx'
import { CartProvider } from './context/cart_context.jsx'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <Toaster position='top-center' />
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </BrowserRouter>
)
