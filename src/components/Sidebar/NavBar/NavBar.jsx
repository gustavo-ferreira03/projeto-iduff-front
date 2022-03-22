import React from 'react'
import NavButton from './NavButton'
import styles from './NavBar.module.css'
import {Link} from "react-router-dom"
import calendar_icon from '../assets/calendar_icon.png'
import student_icon from '../assets/student_icon.png'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
        <Link to="/ViewResume">
        <NavButton 
            img={calendar_icon}
        >Testando 123</NavButton>
        </Link>
        <NavButton 
            img={student_icon}
        >Testando 123</NavButton>
        <NavButton 
            img={calendar_icon}
        >Testando 123</NavButton>
    </nav>
  )
}
