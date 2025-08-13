import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Modal } from '../../components/Modal/Modal';
import useAuthForm from '../../hooks/useAuthForm';
import './style.css';
import useModal from '../../hooks/useModal';

interface ModalProps {
  open(): (() => void);
  close(): (() => void);
}

/**
 * pdfアップロード画面
 */
export const UploadImage: React.FC = () => {
  // モーダル開閉
  const { open, close, isModalOpen } = useModal();

  // TODO：Logout処理
  const handleLogout = (): void => {
    console.log('logout');
  };

  const handleConvertPdf = () => {
    // API fetch 処理
  };


  return (
    <div className='uploadMain'>
      {isModalOpen && <Modal onConfirm={handleConvertPdf} onCancel={close}/>}
      <Header title='Upload PDF' authText='Logout' onSwitch={handleLogout} />
      {/* would like to upload image by drag&drop */}
      <div className='uploadContainer'>
        <label className='fileLabel'>
          ファイルを選択
          <input
            type="file"
            className='fileInput'
            onChange={(e) => console.log(e.target.files)}
          />
        </label>
      </div>

      <div className='btnContainer'>
        <button className='btn upload-btn' onClick={open}>Upload</button>
      </div>
    </div>
  )
}