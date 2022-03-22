import React from 'react'
import './Input.css'

const STYLES = [
    "input--column",
    "input--row"
]

const SIZES = [

]

export default function Input() {
  return (
    <div className="input_container input--column">
        <label htmlFor="input">Teste</label>
        <input type="text" name="input" />
    </div>
  )
}
