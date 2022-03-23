import classes from "./Title.module.css";

export function Title ({children}){
    return(
        <h1 className={classes.v_C}>{children}</h1>
    )
}