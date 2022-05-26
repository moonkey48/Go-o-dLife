import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import firebaseApp from './service/firebase';
import AuthService from './service/auth_service';
import StorageService from './service/storage_service';
import Quote from './service/quote_service';
import Weather from './service/weather_service';
import TranslateUnix from './service/translateUnixTime';


const authService = new AuthService(firebaseApp);
const database = new StorageService(firebaseApp);
const quote = new Quote();
const weather = new Weather();
const translateUnix = new TranslateUnix();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} database={database} quote={quote} weather={weather} translateUnix={translateUnix}/>
  </React.StrictMode>,
  document.getElementById('root')
);
