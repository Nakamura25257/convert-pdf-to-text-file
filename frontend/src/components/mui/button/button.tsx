import './style.css';

type ButtonPropsType = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | HTMLButtonElement | Promise<void> | Promise<string>;
  classname?: string;
  disabled?: boolean;
};

/**
 * Button Component
 * @param label button label
 * @param onclick click event
 * @returns JSX.Element
 */
export const ButtonComponent: React.FC<ButtonPropsType>  = (props: ButtonPropsType) => {
  const {label, onClick, classname, disabled = false} = props;
  return (
    <>
      {
      disabled ? 
        <button className="button" disabled>{label}</button> :
        <button className={classname ? "button ok-btn" : "button"}  onClick={onClick}>{label}</button>
      }
    </>
  )
}