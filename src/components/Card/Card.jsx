import classes from "./Card.module.css"

export function Card (props){
    return(
    <div className={classes.container}>
        <div className={classes.white_box}>{props.children}</div>
    </div>
    )
}