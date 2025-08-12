import { Login } from "../components/Login/Login";
import { SignUp } from "../components/Signup/Signup";
import useAuthForm from "../hooks/useAuthForm";

export default function AuthPage () {
  const { isLogin, switchForm } = useAuthForm();

  return (
    <div>
      { isLogin ? <Login onSwitch={switchForm} /> : <SignUp onSwitch={switchForm} /> }
    </div>
  )
}