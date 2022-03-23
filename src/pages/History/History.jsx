import classes from './History.module.css';
import {Card} from '../../components/Card/Card';
import Table from '../../components/Table/Table';
import TableInput from '../../components/Table/TableInput/TableInput';

const columns = [
    "Nome",
    "Status",
    "Nota"
]

const data = [
    [
        "Cálculo 1A",
        "Aprovado",
        "9.0",
        <TableInput
            placeholder={['teste', 'teste']}
        />
    ],
    [
        "Calculo 2A",
        "Aprovado",
        "6.0",
        <TableInput
            placeholder={['teste', 'teste']}
        />
    ]
]

export function History(){
    return(
        <Card title="Histórico">
            <Table columns={columns} data={data}/>
        </Card>
    )
}