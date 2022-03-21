import React from 'react'
import {api} from '../../../services/api'
import styles from './NavBar.module.css'

export default function NavButton({img, children}) {
  return (
    <button className={styles.nav_button}>
        <div className={styles.img_container}><img src={img} /></div>
        <p>{children}</p>
    </button>
  )
}
