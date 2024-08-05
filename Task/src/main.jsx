import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {CartProvider} from 'react-use-cart'
import 'izitoast/dist/css/iziToast.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <CartProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CartProvider>
)
