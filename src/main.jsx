import React from 'react'; // <-- A LINHA QUE FALTAVA
import ReactDOM from 'react-dom/client';
import App from './App';

// Importa os estilos GLOBAIS
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);