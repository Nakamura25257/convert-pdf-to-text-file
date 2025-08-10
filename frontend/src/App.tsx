import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
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
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(true);

  /**
   * 音声入力ボタンクリック時処理
   */
  const handleMicClick = async (): Promise<void> => {
    let result: boolean = await checkMicrophone();
    console.log(result);

    // micが接続されていない場合、再度マイク有無確認処理を実行
    // TODO: callbackで何度かtryさせたい
    if(!result) {
      // ダイアログを表示させ、再度マイク確認するかをユーザーに決めてもらう
      
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
      console.error("マイクのアクセスに失敗しました", error);
      return false;
    }
  }

  // モーダル外、閉じるボタン押下時->モーダル閉じる
  const outerModalClicked = (e: React.MouseEvent<HTMLElement>) => {
    const clickedEle: HTMLElement = e.target as HTMLElement;
    const className: string = clickedEle.className;
    if(className === 'modal-main' || className === "button") {
      setIsModalOpen(false);
    }
  }

  return (
    <div className='main'>
      <DialogComponent></DialogComponent>


      {isModalOpen && <ModalComponent onClick={outerModalClicked}></ModalComponent>}
      <ButtonComponent onClick={handleMicClick} label='マイクボタン(仮)'></ButtonComponent>
    </div>
  );
}

export default App;
