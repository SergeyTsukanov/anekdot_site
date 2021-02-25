 import styles from "./SearchBar.module.css"
 import { GrFormSearch } from "react-icons/gr";
 import {DropDownMenu} from "../../elements/DropDownMenu/DropDownMenu"
 export const Searchbar = (props) =>{
    const themes = ["","Армейский", "Студенческий","Про вовочку"]
    return <div className ={styles.pannel}>
    
        <form> 
            
            <select>
            
            {themes.map(theme =><option value ={`${theme}`}>{theme}</option>)}
            
        </select>
        <input/>
        <button><GrFormSearch  /></button>
        </form>
    </div>
 }