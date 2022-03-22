import React from 'react'
import './Button.css'

const STYLES = [
    "btn--primary--solid",
    "btn--primary--outline",
    "btn--light-blue--solid",
    "btn--light-blue--outline",
    "btn--red--solid",
    "btn--red--outline",
    "btn--white",
    "btn--white--shadow"
]

const SIZES = [
  "btn--large",
  "btn--medium",
  "btn--small"
]

export default function Button({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) {
  return (
    <button className={`btn ${buttonStyle} ${buttonSize}`}onClick={onClick} type={type}>
        {children}
    </button>
  )
}
