import React from 'react'
import NavButton from './NavButton'
import styles from './NavBar.module.css'
import {Link} from "react-router-dom"
import student_icon from '../assets/student_icon.png'
import curriculum_icon from '../assets/curriculum_icon.png'
import subscription_icon from '../assets/subscription_icon.png'
import history_icon from '../assets/history_icon.png';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
        <Link to="/History">
        <NavButton
            img={history_icon}
        >Histórico</NavButton>
        </Link>
        <Link to="/ViewResume">
        <NavButton 
            img={curriculum_icon}
        >Curriculos</NavButton>
        </Link>
        <Link to="/Classroom">
        <NavButton 
            img={student_icon}
        >Turmas</NavButton>
        </Link>
        <NavButton 
            img={subscription_icon}
        >Inscrição Online</NavButton>
    </nav>
  )
}
