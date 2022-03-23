import React from 'react'
import './Input.css'

const DIRECTIONS = [
    "input--column",
    "input--row"
]

const SIZES = [
    "input--large",
    "input--medium",
    "input--small"
]

export default function Input({name, onChange, inputDirection, inputSize, label, type}) {
  return (
    <div className={`input_container ${inputDirection}`}>
        <label htmlFor={name}>
            {`${label}${ inputDirection == "input--row" ? ":" : "" }`}
        </label>
        <input onChange={onChange} type="text" name={name} className={`input ${inputSize}`} type={type}/>
    </div>
  )
}
