import React from 'react'
import TableRow from '../components/Table/TableRows/TableRows'
import Table from '../components/Table/Table'
import Button from '../components/Button/Button'

// Precisa colocar as colunas da tabela
const columns = [
  "Nome",
  "Período",
  "CHT",
]

// Carrega o conteúdo que vai ser colocado dentro de cada linha (pode colocar botões ou dropdowns tb)
const data = [
  ["Cálculo 1A",
  "Seg e Qua, 14h as 16h",
  "60"],
  ["Cálculo 2A",
  "Seg e Qua, 14h as 16h",
  "60"]
]

export default function Test() {
  return (
    <>
      <Table columns={columns} data={data} />
    </>
  )
}
