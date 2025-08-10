import { ModalType } from '../../types/modal';
import { ButtonComponent } from '../button/button';
import './style.css';
/**
 * 警告や情報表示用モーダル
 * @param onClick click event
 * @returns DOMContent
 */
export const ModalComponent: React.FC<ModalType> = ({onClick, modalText}) => {
  return (
    <div className='modal-main' onClick={onClick}>
      <div className='container'>
        <div className='contents'>
          <p className='text' dangerouslySetInnerHTML={{__html: modalText}}></p>
          <div className='closeButton'>
            <ButtonComponent label='閉じる'></ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  )
}