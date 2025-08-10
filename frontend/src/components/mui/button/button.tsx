import './style.css';

type ButtonPropsType = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | HTMLButtonElement | Promise<void>;
  disabled?: boolean;
};

/**
 * Button Component
 * @param label button label
 * @param onclick click event
 * @returns JSX.Element
 */
export const ButtonComponent: React.FC<ButtonPropsType>  = ({label, onClick, disabled = false}) => {
  return (
    <>
      {
      disabled ? 
        <button className='button' disabled>{label}</button> :
        <button className='button' onClick={onClick}>{label}</button>
      }
    </>
  )
}