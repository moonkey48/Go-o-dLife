import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import firebaseApp from './service/firebase';
import AuthService from './service/auth_service';
import StorageService from './service/storage_service';
import Quote from './service/quote_service';


const authService = new AuthService(firebaseApp);
const database = new StorageService(firebaseApp);
const quote = new Quote();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} database={database} quote={quote} />
  </React.StrictMode>,
  document.getElementById('root')
);
