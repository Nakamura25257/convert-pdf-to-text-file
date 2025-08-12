import { useState } from "react";

/**
 * カスタムフックはuseから始める。(Reactはuseから始まる関数をフックとして認識し、ルール違反の場合は検出できるようになっている)
 * カスタムフックはUIを返すものではなく、ロジックや状態を返すもの。
 */
export default function useAuthForm() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const switchForm = (): void => {
    setIsLogin(prevState => !prevState);
  };
  return { isLogin, switchForm };
}