import { useState } from "react";

export default function useAuthForm() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const switchForm = (): void => {
    setIsLogin(prevState => !prevState);
  };
  return { isLogin, switchForm };
}