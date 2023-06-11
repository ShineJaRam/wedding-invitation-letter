import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from 'twin.macro';
import App from './App';
import 'tailwindcss/tailwind.css';
import '@styles/var.css';
import '@styles/reset.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
