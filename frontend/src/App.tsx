import { useState } from 'react';
import './App.css';
import AuthPage from './pages/AuthPage';
import { UploadImage } from './pages/Upload/UploadImage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      {isLoggedIn ? <UploadImage /> : <AuthPage /> }
    </div>
  );
}

export default App;
