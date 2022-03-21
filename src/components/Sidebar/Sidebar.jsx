import React from 'react'
import UserInfo from './UserInfo'
import NavBar from './NavBar/NavBar'

import styles from './Sidebar.module.css'
import uff_logo from './assets/uff-logo.png'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <div>
            <UserInfo
                name="Fulano da Silva"
                course="Sistemas de Informação"
                registration_id="M. 01301000123"
            />
            <NavBar />
        </div>
        <div className={styles.img_container}>
            <img src={uff_logo} />
        </div>
    </div>
  )
}
