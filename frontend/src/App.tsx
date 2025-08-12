import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import AuthPage from './pages/AuthPage';

function App() {


  const handleFetch = async () => {
    let formData: FormData = new FormData();

    const url = 'http://localhost:5000/pdf_analize'
    try {
      formData.append('hoge', 'hogehoge');


      const res = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className='main'>
      <AuthPage />
    </div>
  );
}

export default App;
