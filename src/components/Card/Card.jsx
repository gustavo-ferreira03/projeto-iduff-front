import classes from "./Card.module.css"

export function Card ({title, children}){
    return(
    <div className={classes.container}>
        <div className={classes.white_box}>
            <h1 className={classes.v_C}>{title}</h1>
            <section className={classes.List}>
                {children}
            </section>
        </div>
    </div>
    )
}