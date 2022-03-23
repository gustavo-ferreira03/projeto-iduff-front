import React from 'react'

export default function TableRows({ data }) {
  return (
    // Itera sobre cada linha
    data.map((row, index) => <tr key={index} className="table_row">
      {/* Itera sobre o conteúdo da linha */}
      {row.map((content, index)=> <td key={index}>{content}</td>)}
    </tr>)
  )
}
