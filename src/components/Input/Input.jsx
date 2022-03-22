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

export default function Input({inputDirection, inputSize, label, type}) {
  return (
    <div className={`input_container ${inputDirection}`}>
        <label htmlFor="input">
            {`${label}${ inputDirection == "input--row" ? ":" : "" }`}
        </label>
        <input type="text" name="input" className={`input ${inputSize}`} type={type}/>
    </div>
  )
}