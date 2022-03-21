import React from 'react'
import Button from '../Button/Button'
import styles from './Sidebar.module.css'

export default function UserInfo({name, course, registration_id}) {
  return (
    <div className={styles.user_info}>
        <p>{name}</p>
        <p>{course}</p>
        <p>{registration_id}</p>
        <Button 
            buttonStyle="btn--white"
            buttonSize="btn--medium"
        >editar dados</Button>
    </div>
  )
}
