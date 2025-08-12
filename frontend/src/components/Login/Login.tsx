import { AuthType } from "../../types/auth";
import { Header } from "../Header/Header"
import './style.css';

export const Login: React.FC<AuthType> = (props) => {
  const { onSwitch } = props;

  return (
    <div className="loginWrapper">
      <Header title='Login' authText='SignUp' onSwitch={onSwitch} />

      <div className="loginForm">
        <input type="text" className="username" placeholder="username" />
        <input type="password" className="password" placeholder="password" />
      </div>
      <span className="signupText" onClick={onSwitch}>アカウント作成はこちらから</span>

      <button className="loginBtn">Login</button>
    </div>
  )
}