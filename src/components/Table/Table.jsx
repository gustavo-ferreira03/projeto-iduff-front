import React from 'react'
import styles from './Table.module.css'
import TableRow from './TableRows/TableRows'

export default function Table({ columns, data }) {
  return (
    <table className={styles.table}>
        <thead>
            <tr>
                {columns.map(column => <th>{column}</th>)}
            </tr>
        </thead>
        <tbody>
          {<TableRow data={data}></TableRow>}
        </tbody>
    </table>
  )
}
