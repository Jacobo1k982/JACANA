import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import Store from './app/Store';
import { Toaster } from "react-hot-toast";

import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(


    <Provider store={Store}>
        <BrowserRouter>
            <Toaster position='top-center' reverseOrder={false} />
        </BrowserRouter>
        <App />
    </Provider>

);      
