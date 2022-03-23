import React from 'react'
import styles from './Table.module.css'
import TableRow from './TableRows'

// // Precisa colocar as colunas da tabela
// const columns = [
//   "Nome",
//   "Período",
//   "CHT",
// ]

// // Carrega o conteúdo que vai ser colocado dentro de cada linha (pode colocar botões ou dropdowns tb)
// const data = [
//   ["Cálculo 1A",
//   "Seg e Qua, 14h as 16h",
//   "60"],
//   ["Cálculo 2A",
//   "Seg e Qua, 14h as 16h",
//   "60"]
// ]

export default function Table({ columns, data }) {
  return (
    <table className={styles.table}>
        <thead>
            <tr>
                {columns.map((column, index) => <th key={index}>{column}</th>)}
            </tr>
        </thead>
        <tbody>
          {<TableRow data={data}></TableRow>}
        </tbody>
    </table>
  )
}
