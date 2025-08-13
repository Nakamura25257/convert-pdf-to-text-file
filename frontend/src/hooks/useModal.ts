import { useState } from "react";

/**
 * モーダル開閉処理
 */
export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const open = () => setIsModalOpen(true);
  const close = () => setIsModalOpen(false);

  return { open, close, isModalOpen };
}