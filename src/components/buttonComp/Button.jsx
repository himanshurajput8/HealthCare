import './button.css'
const Button = ({ children, onClick, className, type = 'button', disabled = false }) => {
  return (
    <div className="submit-container">
      <button onClick={onClick} className={className} type={type} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

export default Button;