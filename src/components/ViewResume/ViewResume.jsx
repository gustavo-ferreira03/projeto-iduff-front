import classes from './ViewResume.module.css';

export function ViewResume (){
    return(
        <div className={classes.white_box}>
            <h1 className={classes.v_C}>Visualizar currículos</h1>
            <section className={classes.List}>
                <p>Vizualize aqui o currículo de qualquer um dos cursos da UFF.</p>
                <div>
                    <h2>Curso:</h2>
                </div>
            </section>
        </div>
    )
}