import './button.css'
const Button = ({ children, onClick, className, type = 'button', disabled = false }) => {
  return (
    <button onClick={onClick} className={className} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;