import React from 'react'
import styles from './TableInput.module.css'

export default function TableInput({placeholder, onChange}) {
  return (
      <div className={styles.table_input_container}>
        <input type="number" placeholder={placeholder[0]} className={styles.table_input} onChange={onChange}/>
        <input type="number" placeholder={placeholder[1]} className={styles.table_input} onChange={onchange}/>
      </div>
  )
}
