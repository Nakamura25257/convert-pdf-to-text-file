export interface ModalType {
  modalText: string;
  onClick?: ((e: React.MouseEvent<HTMLElement>) => void);
}

export interface UserDialogType {
  dialogText: string;
  onClick?: any;
  onOKBtnClicked: any;
}