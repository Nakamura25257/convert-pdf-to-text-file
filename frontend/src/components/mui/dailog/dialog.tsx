import React from 'react';
import { ButtonComponent } from '../button/button';
import './style.css';
import { UserDialogType } from '../../types/modal';

/**
 * ユーザー選択用ダイアログ
 * @param onClick click event
 * @returns DOMContent
 */
export const DialogComponent: React.FC<UserDialogType> = ({onClick, dialogText, onOKBtnClicked}) => {

  return (
    <div className='dialog-main' onClick={onClick}>
      <div className='container'>
        <div className='contents'>
          <p className='text' dangerouslySetInnerHTML={{__html: dialogText}}></p>
          <div className='closeButtonContainer'>
            <ButtonComponent label='Cancel'></ButtonComponent>
            <ButtonComponent label='OK' classname='ok-btn' onClick={onOKBtnClicked}></ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  )
}