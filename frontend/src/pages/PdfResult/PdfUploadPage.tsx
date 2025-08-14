import { useSelector } from 'react-redux';
import './style.css';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';

export const PdfUpload: React.FC = () => {
  // storeからデータ取得
  const textData = useSelector((state: RootState) => state.data.value);
  
  return (
    <div>
      {textData}
    </div>
  )
}