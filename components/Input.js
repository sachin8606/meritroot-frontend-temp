import React from 'react';

const Input = ({ type, placeholder, value, onChange, className, style,name }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`p-3 rounded-lg bg-white bg-opacity-70 border-2 border-transparent focus:border-[#F87982] focus:outline-none ${className}`}
      style={{
        background: 'white',
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
        ...style,
      }}
    />
  );
};

export default Input;
