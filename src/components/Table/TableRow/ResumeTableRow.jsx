import React from 'react'
import './TableRow.css'

export default function TableRow({ data }) {
  return (
    <tr className="table_row">
        <td>{data.course}</td>
        <td>{data.semester}</td>
        <td>{data.cht}</td>
    </tr>
  )
}
