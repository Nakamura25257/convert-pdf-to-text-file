import useModal from '../../hooks/useModal';
import './style.css';

interface ModalProps {
  onConfirm: (() => void);
  onCancel: (() => void);
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { onCancel, onConfirm } = props;

  const handleModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const ele = e.target as HTMLDivElement;
    const currentTarget = e.currentTarget as HTMLDivElement;
    if(ele === currentTarget) onCancel();
  }

  return (
    <div className='modalWrapper' onClick={handleModal}>
      <div className='modalContainer'>
        <h3 className='title'>PDFをテキストへ変換してもよろしいですか？</h3>
        <div className='btnContainer modal-btns'>
          <button className='btn cancel-btn' onClick={onCancel}>Cancel</button>
          <button className='btn upload-btn' onClick={onConfirm}>OK</button>
        </div>
      </div>
    </div>
  )
};