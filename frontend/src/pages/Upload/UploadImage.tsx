import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Modal } from '../../components/Modal/Modal';
import useAuthForm from '../../hooks/useAuthForm';
import './style.css';
import useModal from '../../hooks/useModal';

/**
 * pdfアップロード画面
 */
export const UploadImage: React.FC = () => {
  const [modalText, setModalText] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  // モーダル開閉
  const { open, close, isModalOpen } = useModal();

  // TODO：Logout処理
  const handleLogout = (): void => {
    console.log('logout');
  };

  // PDFをテキストへ変換処理
  const handleConvertPdf = async () => {
    if(!file) {
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    // API fetch 処理
    const url = 'http://localhost:5000/upload';
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      console.log('res', res);
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>): void => {
    const file: File | null = e.target.files?.[0] || null;
    if(file) {
      setFile(file);
      setModalText('以下のPDFをテキストへ変換します。<br> よろしいですか？')
    }
  }

  return (
    <div className='uploadMain'>
      {isModalOpen && <Modal modalText={modalText} fileName={file?.name} onConfirm={handleConvertPdf} onCancel={close}/>}
      <Header title='Upload PDF' authText='Logout' onSwitch={handleLogout} />
      {/* would like to upload image by drag&drop */}
      <div className='uploadContainer'>
        <label className='fileLabel'>
          {file?.name ? file.name : '選択してください'}
          <input
            type="file"
            className='fileInput'
            onChange={onChangeFile}
            // accept='.pdf'
          />
        </label>
      </div>
      <div className='btnContainer'>
        <button 
          className={file?.name ? 'btn upload-btn' : 'btn disabled'} 
          onClick={open}
          >Upload</button>
      </div>
    </div>
  )
}