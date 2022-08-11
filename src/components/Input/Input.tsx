import React from 'react';

const Input = ({ value, type, placeholder, onChange, className }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input value={value} className={className} type={type} placeholder={placeholder} onChange={onChange} />
  )
}

export default Input