import React, { useState } from 'react';
import './App.css';
import { ButtonComponent } from './components/mui/button/button';
import { ModalComponent } from './components/mui/modal/modal';
import { DialogComponent } from './components/mui/dailog/dialog';

// もう少し固くても良い
type hasMicType = {
  deviceId: string;
  groupId: string;
  kind: string;
  label: string;
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');
  const [isPromiseBtn, setIsPromiseBtn] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [dialogText, setDialogText] = useState<string>('');

  // 音声入力ボタン押下時処理
  const handleMicClick = async (): Promise<void> => {
    // micが接続されていない場合、再度マイク有無確認処理を実行
    await checkMicrophone().then((result: boolean) => {
      if(!result) {
        setIsModalOpen(true);
        setModalText('マイクの接続に失敗しました');
        return Promise.reject('mic not found');
      }
      return Promise.resolve();
    })
    .then(() => {
      setIsModalOpen(true);
      setIsPromiseBtn(true);
      setModalText('音声入力を開始します。');
    })
    .then(() => {

    })
    .catch((error) => {
      console.error(error);
    });
  }

  // UserダイアログOKボタン押下時処理
  const handleDialogOk = async (): Promise<void> => {
    const result: boolean = await checkMicrophone();
    if(!result) {
      setIsModalOpen(true);
      setModalText('マイクの接続ができませんでした。<br>設定を確認してください。')
    }
  }

  /**
   * マイク有無確認処理
   */
  const checkMicrophone = async(): Promise<boolean> => {
    try {
      const devices: MediaDeviceInfo[] = await navigator.mediaDevices.enumerateDevices();
      const hasMic: hasMicType | undefined = devices.find(device => device.kind === "audioinput");

      // hasMicの型ががhasMicTypeかundefinedのため、hasMicが存在するかどうかでtrue/falseを返したい。
      // truthy/falsyをboolean型に変換して返す 
      return !!hasMic;
    } catch(error: unknown) {
      setIsModalOpen(true);
      setModalText(`Unexpected Error Occured`);
      console.error('Unexpected error occured', error);
      return false;
    }
  }

  // モーダル外、閉じるボタン押下時->モーダル閉じる
  const outerModalClicked = (e: React.MouseEvent<HTMLElement>) => {
    const clickedEle: HTMLElement = e.target as HTMLElement;
    const className: string = clickedEle.className;
    if(className === 'modal-main' || className === 'button') {
      setIsModalOpen(false);
    }

    if(className === 'dialog-main' || className === 'button') {
      setIsDialogOpen(false);
    }
  }

  return (
    <div className='main'>
      {isDialogOpen && 
        <DialogComponent 
          onOKBtnClicked={handleDialogOk} 
          onClick={outerModalClicked} 
          dialogText={dialogText}
        ></DialogComponent> 
      }
      {isModalOpen &&
          <ModalComponent onClick={outerModalClicked} modalText={modalText}></ModalComponent>
      }
      <ButtonComponent onClick={handleMicClick} label='マイクボタン(仮)'></ButtonComponent>
    </div>
  );
}

export default App;
