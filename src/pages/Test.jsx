import React from 'react'
import TableRow from '../components/Table/TableRows/TableRows'
import Table from '../components/Table/Table'
import Button from '../components/Button/Button'

// Precisa colocar as colunas da tabela
const columns = [
  "Nome",
  "Período",
  "CHT"
]

// Carrega o conteúdo que vai ser colocado dentro de cada linha (pode colocar botões ou dropdowns tb)
const data = [
  ["Cálculo 1A",
  "Seg e Qua, 14h as 16h",
  "401",
  <Button buttonSize="btn--small" buttonStyle="btn--light-blue--solid">GERENCIAR</Button>],
  ["Cálculo 2A",
  "Seg e Qua, 14h as 16h",
  "402",
  <Button buttonSize="btn--small" buttonStyle="btn--light-blue--solid">GERENCIAR</Button>]
]

export default function Test() {
  return (
    <>
      <Table columns={columns} data={data} />
    </>
  )
}
