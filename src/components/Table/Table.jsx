import React from 'react'
import styles from './Table.module.css'

export default function Table({ columns, data, children }) {
  return (
    <table className={styles.table}>
        <thead>
            <tr>
                {columns.map(column => <th>{column}</th>)}
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
  )
}
