import { useEffect, useState } from 'react'

const FormInput = (props) => {
  const { label, labelHidden, errorMessage, onChange, id, require, submitted, ...inputProps } = props
  const [isValid, setIsValid] = useState(true)

  useEffect(() => {
    if (submitted && require && !inputProps.value) {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }, [submitted, inputProps, require])

  return (
    <div className='mt-0 mb-6'>
      {label && (
        <label className={`block font-medium mb-1 ${labelHidden && 'invisible'}`}>
          {label}
          {require && <span className='text-errorColor'>*</span>}{' '}
        </label>
      )}
      {inputProps.type === 'radio' ? (
        <div className='flex'>
          {inputProps?.options.map((option) => (
            <div key={option.value} className='mr-4 text-placeHolderColor flex items-center'>
              <input
                {...inputProps}
                value={option.value}
                checked={inputProps.value === option.value}
                onChange={onChange}
                className='mr-1 w-4 h-4'
                id={option.value}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
        </div>
      ) : (
        <input
          {...inputProps}
          onChange={onChange}
          className={`${
            isValid ? 'border-gray-300' : 'border-red-500'
          } w-full rounded-md p-3 border border-gray-300  outline-none placeholder-placeHolderColor ::placeholder`}
        />
      )}
      {!isValid && submitted && <span className='text-errorColor text-xs p-1 block'>{errorMessage}</span>}
    </div>
  )
}

export default FormInput
