import classes from './History.module.css';
import {Title} from '../Title/Title';
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
        <Card>
            <Title>Histórico</Title>
            <section className={classes.List}>
                <Table columns={columns} data={data}/>
            </section>
        </Card>
    )
}