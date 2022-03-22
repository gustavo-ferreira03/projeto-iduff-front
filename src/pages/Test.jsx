import React from 'react'
import TableRow from '../components/Table/TableRow/ResumeTableRow'
import Table from '../components/Table/Table'

const columns = [
  "teste1",
  "teste2",
  "teste3"
]

const courses = [{
  course: "Cálculo I",
  semester: "1 Período",
  cht: "60"
}, {
  course: "Cálculo I",
  semester: "1 Período",
  cht: "60"
}]

export default function Test() {
  return (
    <>
      <Table columns={columns}> 
        {courses.map(course => <TableRow data={course}></TableRow>)}
      </Table>
    </>
  )
}
