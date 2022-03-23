import React from 'react';
import classes from './Classroom.module.css';
import Table from '../../components/Table/Table';
import {Card} from '../../components/Card/Card';

const columns = [
    "Nome",
    "Código",
    "Calendário",
    "Sala"
]

const data = [
    ["Cálculo 1",
    "A1",
    "Seg e Qua, 14h as 16h",
    "401"],
    ["Cálculo 2",
    "A2",
    "Seg e Qua, 16h as 18h",
    "402"]
]

export default function Classroom() {
    return (
        <Card title="Turmas">
            <div className={classes.VizuAqui}>
                <p className={classes.textStud}>Aluno: </p>
                <div className={classes.Table}>
                    <Table columns={columns} data={data}/>
                </div>
            </div>
        </Card>
    )
}
