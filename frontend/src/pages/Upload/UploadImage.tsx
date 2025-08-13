import { ChangeEvent, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Modal } from '../../components/Modal/Modal';
import './style.css';
import useModal from '../../hooks/useModal';
import { ExtractRedType } from '../../types/extract';
import { useNavigate } from 'react-router-dom';

/**
 * pdfアップロード画面
 */
export const UploadImage: React.FC = () => {
  const [modalText, setModalText] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState<string>('');
  const navigate = useNavigate();

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
      const res: Response = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      const data: ExtractRedType = await res.json();

      if(res.status === 200) {
        setExtractedText(data.message);
        navigate('/result');
      }
    } catch (error) {
      console.error(error);
    };
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>): void => {
    const file: File | null = e.target.files?.[0] || null;
    if(file) {
      setFile(file);
      setModalText('以下のPDFをテキストへ変換します。<br> よろしいですか？')
    }
  };

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
            accept='.pdf'
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