import { useState } from "react";

/**
 * Login, Signup画面遷移状態監視関数
 */
export default function useAuthForm() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const switchForm = (): void => {
    setIsLogin(prevState => !prevState);
  };
  return { isLogin, switchForm };
}