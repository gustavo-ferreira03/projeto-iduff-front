import React from 'react'
import UserInfo from './UserInfo'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <UserInfo
            name="teste"
            course="teste"
            registration_id="teste"
        />
    </div>
  )
}
