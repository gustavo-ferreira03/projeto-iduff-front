import classes from './DropDown.module.css';

export function DropDown({courses}){
    return(
        <div className={classes.dropdown}>
            <label for="Curso" className={classes.Curso}>Curso :</label>
            <select className={classes.dropdownbox} name="Curso">
                { courses.map((courses) => <option>{courses}</option>)}
            </select>
        </div>
    )
}