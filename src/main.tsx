import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'tailwindcss/tailwind.css';
import '@styles/var.css';
import '@styles/reset.css';
import ModalPortal from './components/modalPortal';
import '@styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ModalPortal />
  </React.StrictMode>
);
