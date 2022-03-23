import classes from "./Card.module.css"

export function Card ({children}){
    return(
    <div className={classes.container}>
        <div className={classes.white_box}>{children}</div>
    </div>
    )
}