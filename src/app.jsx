import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import s from './app.module.css';
import Main from './components/main/main';


class App extends Component {
  
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/main' element={<Main/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
