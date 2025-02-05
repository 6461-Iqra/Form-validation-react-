import React from 'react'
import { useState } from 'react'
import './FormInput.css'

function FormInput({label,errormessage,onChange,id,...inputprops}) {
  const [focused, setFocused] = useState(false)
  
  const handleFocus = () => {
    setFocused(true)
  }

  return (
    <div className='con-form'>
      <label>{label}</label>
      <input {...inputprops}
       onChange={onChange}
       onBlur={handleFocus}
       onFocus={() =>
         inputprops.name === "confirmPassword" && setFocused(true)
       }
       focused={focused.toString()}
        /> 
      <span>{errormessage}</span>
    </div>
  )
} 

export default FormInput
