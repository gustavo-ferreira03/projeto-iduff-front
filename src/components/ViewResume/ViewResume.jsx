import classes from './ViewResume.module.css';
import Table from '../Table/Table';
import Button from '../Button/Button';

// Precisa colocar as colunas da tabela
const columns = [
    "Nome",
    "",
    "Período",
    "CHT"
  ]
  
  // Carrega o conteúdo que vai ser colocado dentro de cada linha (pode colocar botões ou dropdowns tb)
  const data = [
    ["Cálculo 1A",
    "",
    "Seg e Qua, 14h as 16h",
    "401",
    <Button buttonSize="btn--small" buttonStyle="btn--light-blue--solid">GERENCIAR</Button>],
    ["Cálculo 2A",
    "",
    "Seg e Qua, 14h as 16h",
    "402",
    <Button buttonSize="btn--small" buttonStyle="btn--light-blue--solid">GERENCIAR</Button>]
  ]

export function ViewResume (){
    return(
        <div className={classes.container}>
            <div className={classes.white_box}>
                <div classes={classes.content_container}>
                    <h1 className={classes.v_C}>Visualizar currículos</h1>
                    <section className={classes.List}>
                        <div className={classes.VizuAqui}>
                            <p>Vizualize aqui o currículo de qualquer um dos cursos da UFF.</p>
                            <div>
                                <h2 className={classes.Curso}>Curso:</h2>
                                {/* Menu drop down */}
                            </div>
                        </div>
                        <div className={classes.Table}>
                            <Table columns={columns} data={data}/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}