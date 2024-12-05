import React from 'react';
import ReactDOM from 'react-dom/client'; // Assurez-vous d'importer depuis 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store'; // Importez votre store
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'; // Importez le fichier CSS de Tailwind

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Si tu veux commencer à mesurer les performances de ton application
// et les enregistrer avec une fonction (par exemple : reportWebVitals(console.log))
reportWebVitals();
