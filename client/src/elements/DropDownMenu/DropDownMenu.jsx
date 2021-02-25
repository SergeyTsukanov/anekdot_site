import styles from "./DropDownMenu.module.css"

export const DropDownMenu  =(props) =>{
   
    return <div>
        <select>
            
            {props.themes.map(theme =><option value ={`${theme}`}>{theme}</option>)}
            
        </select>
    </div>
}