import React from 'react';
<<<<<<< HEAD
import { createRoot } from "react-dom/client";import './index.css';
=======
import { createRoot } from "react-dom/client";
import './index.css';
>>>>>>> 7d297494a4d0a8600edc5f23ebb25279dab4018c
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import AuthProvider from './providers/AuthProvider';
import { initMiddleware } from "devise-axios";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

<<<<<<< HEAD
=======
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

>>>>>>> 7d297494a4d0a8600edc5f23ebb25279dab4018c
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
<<<<<<< HEAD
  </AuthProvider>
=======
  </AuthProvider>,
>>>>>>> 7d297494a4d0a8600edc5f23ebb25279dab4018c
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
