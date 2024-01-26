import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from './context/productcontex.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FilterContextProvider } from './context/filter_context.jsx'
// import { CartProvider } from './context/cart_context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <FilterContextProvider>
        {/* <CartProvider> */}
          <App />
        {/* </CartProvider> */}
      </FilterContextProvider>
    </AppProvider>
  </BrowserRouter>
)
