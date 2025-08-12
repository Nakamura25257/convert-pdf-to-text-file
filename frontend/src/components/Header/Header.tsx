import './style.css';

type LoginType = {
  title: string;
  authText: string;
  onSwitch: (() => void);
};

export const Header: React.FC<LoginType> = (props) => {
  const { title, authText, onSwitch } = props;

  return (
    <div className='header'>
      <p className='title'>{title}</p>

      {/* TODO：動的に変更する */}
      <p className='authText' onClick={onSwitch}>{authText}</p>
    </div>
  )
}