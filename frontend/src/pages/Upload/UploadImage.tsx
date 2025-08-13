import { Header } from '../../components/Header/Header';
import useAuthForm from '../../hooks/useAuthForm';
import './style.css';

/**
 * pdfアップロード画面
 */
export const UploadImage: React.FC = () => {
  const { isLogin, switchForm } = useAuthForm();

  // TODO：Logout処理
  const handleLogout = (): void => {
    console.log('logout');
  };

  return (
    <div className='uploadMain'>
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
        <button className='btn cancel-btn'>Cancel</button>
        <button className='btn upload-btn'>Upload</button>
      </div>
    </div>
  )
}