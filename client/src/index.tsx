import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tailwindcss/tailwind.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='flex justify-center items-center h-screen w-full'>
    <App />
    </div>
  </React.StrictMode>
);


