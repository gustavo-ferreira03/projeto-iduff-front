import classes from './DropDown.module.css';

export function DropDown({courses}){
    return(
        <div className={classes.dropdown}>
            <label htmlFor="Curso" className={classes.Curso}>Curso :</label>
            <select className={classes.dropdownbox} name="Curso">
                { courses.map((courses, index) => <option key={index}>{courses}</option>)}
            </select>
        </div>
    )
}