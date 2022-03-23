import classes from './History.module.css';
import {Card} from '../Card/Card';
import Table from '../Table/Table';

const columns = [
    "Nome",
    "Status",
    "Nota"
]

const data = [
    ["Cálculo 1A",
    "Aprovado",
    "9.0"],
    ["Calculo 2A",
    "Aprovado",
    "6.0"]
]

export function History(){
    return(
        <Card title="Histórico">
            <Table columns={columns} data={data}/>
        </Card>
    )
}