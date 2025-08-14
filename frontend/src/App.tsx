import { useState } from 'react';
import './App.css';
import AuthPage from './pages/AuthPage';
import { UploadImage } from './pages/Upload/UploadImage';
import { Route, Routes } from 'react-router-dom';
import { PdfUpload } from './pages/PdfResult/PdfUploadPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    
    <div className='main'>
      <Routes>
        <Route path='/' element={isLoggedIn ? <UploadImage /> : <AuthPage />}></Route>
        <Route path='/result' element={<PdfUpload />}></Route>
      </Routes>
    </div>
  );
}

export default App;
