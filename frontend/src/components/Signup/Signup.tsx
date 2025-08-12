import { AuthType } from "../../types/auth";
import { Header } from "../Header/Header"
import './style.css';

export const SignUp: React.FC<AuthType> = (props) => {
  const { onSwitch } = props;

  return (
    <div className="signUpWrapper">
      <Header title='SignUp' authText='Login' onSwitch={onSwitch}/>

      <div className="signUpForm">
        <input type="text" className="username" placeholder="username" />
        <input type="password" className="password" placeholder="password" />
      </div>
      <span className="signupText" onClick={onSwitch}>ログインはこちらから</span>

      <button className="signUpBtn">SignUp</button>
    </div>
  )
}