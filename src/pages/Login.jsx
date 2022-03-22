import React from 'react'
import styles from "./Login.module.css"

import iduff_logo from './assets/iduff_logo.png'

export default function Login() {
  return (
    <div className={styles.login_container}>
        <div className={styles.login_box}>
            <div className={styles.welcome_section}>
                <div className={styles.img_container}><img src={iduff_logo} alt="" /></div>
                <h1>Bem vindo ao Sistema Acadêmico da Graduação</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ex vel mauris porta pulvinar. Integer luctus bibendum ex et faucibus. Vivamus sagittis consectetur quam et rhoncus. Cras imperdiet nisi et elementum dictum. Duis nec turpis eleifend, viverra turpis et, egestas felis.</p>
            </div>
            <div className={styles.form_section}>
                a
                {/* <LoginForm /> */}
            </div>
        </div>
    </div>
  )
}
