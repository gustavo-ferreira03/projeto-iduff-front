import classes from './ViewResume.module.css';
import Table from '../../components/Table/Table';
import { Card } from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import {DropDown} from '../../components/DropDown/DropDown';


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
    "60"],
    ["Cálculo 2A",
    "Seg e Qua, 14h as 16h", 
    "60"]
]

const courses = [
    " ",    
    "SI", 
    "CC"
]

export function ViewResume (){
    return(
        <Card title="Visualizar currículos">
            <div className={classes.VizuAqui}>
                <p>Vizualize aqui o currículo de qualquer um dos cursos da UFF.</p>
                <div className={classes.CurDrop}>
                    <DropDown courses={courses}/>
                </div>
            </div>
            <div className={classes.Table}>
                <Table columns={columns} data={data}/>
            </div>
        </Card>
    )
}