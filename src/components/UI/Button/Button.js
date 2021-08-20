import './Button.css';

const Button = (props) => {
  const { className = '', type = 'button', text = '', onClick = () => {} } = props;
  return (
    <button className={`Button ${className}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
