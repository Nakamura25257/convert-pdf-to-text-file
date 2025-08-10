import React from 'react';
import { ButtonComponent } from '../button/button';
import './style.css';
import { ModalComponentType } from '../../types/modal';

/**
 * ユーザー選択用ダイアログ
 * @param onClick click event
 * @returns DOMContent
 */
export const DialogComponent: React.FC<ModalComponentType> = () => {
  return (
    <div className='modal-main' >
      <div className='container'>
        <div className='contents'>
          <p className='text'>hoge</p>
          <div className='closeButton'>
            <ButtonComponent label='閉じる'></ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  )
}