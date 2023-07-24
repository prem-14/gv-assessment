import React from 'react'

const Button = (props) => {
  const { variant, className, label } = props
  return (
    <button
      className={`
      ${variant === 'contained' && 'bg-primaryColor text-white'} 
      ${variant === 'outlined' && 'bg-white text-primaryColor border border-primaryColor'}
      rounded-md font-medium
      ${className}
      `}
      onClick={props.onClick}
    >
      {label}
    </button>
  )
}

export default Button
