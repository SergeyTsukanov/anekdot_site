 import styles from "./SearchBar.module.css"
 import { GrFormSearch } from "react-icons/gr";
 import {DropDownMenu} from "../../elements/DropDownMenu/DropDownMenu"
import { useFormik } from "formik";


 export const Searchbar = (props) =>{
    const themes = ["","Армейский", "Студенческий","Про вовочку"]

    const formik = useFormik({
        initialValues:{
           title:"",
            type:"",
        },
        onSubmit:values =>{
            console.log(formik.values )
            props.setFilter({type:formik.values.type,
                title:formik.values.title.split(" ").join("")})
            
        }
    })
    return <div className ={styles.pannel}>
    
        <form onSubmit ={formik.handleSubmit}> 
            
            <select name = "type" onChange = {formik.handleChange} value = {formik.values.type}>
            
            {themes.map(theme =><option value ={`${theme}`}>{theme}</option>)}
            
        </select>
        <input name ="title" onSubmit ={formik.handleSubmit} onChange  ={formik.handleChange}/>
        <button type ="submit"><GrFormSearch  /></button>
        </form>
    </div>
 }