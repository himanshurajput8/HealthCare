import React from 'react';

const Input = ({ type = 'text', label, value, onChange, name, placeholder }) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      {type === 'checkbox' ? (
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
      ) : (
        <input
          type={type}
          id={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Input;