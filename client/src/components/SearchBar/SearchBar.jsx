import styles from "./SearchBar.module.css"
import { GrFormSearch } from "react-icons/gr";
import { DropDownMenu } from "../../elements/DropDownMenu/DropDownMenu"
import { useFormik } from "formik";
import { AiOutlineClear } from "react-icons/ai";
import { useContext } from "react";
import { MyContext } from "../../context";
 
export const Searchbar = (props) => {
   
    const themes = useContext(MyContext)

    const formik = useFormik({
        initialValues: {
            title: "",
            type: "",
        },
        onSubmit: values => {
            console.log(formik.values)
            props.setFilter({
                type: formik.values.type,
                title: formik.values.title.split(" ").join("")
            })
            
        }
    })
    return <div className={styles.pannel}>

        <form onSubmit={formik.handleSubmit}>
            
            <button onClick={()=>formik.resetForm()}><AiOutlineClear/></button>
            <select name="type" onChange={formik.handleChange} value={formik.values.type}>
                {themes.map(theme => <option value={`${theme}`}>{theme}</option>)}
            </select>
            <input name="title"  onChange={formik.handleChange} value = {formik.values.title}/>
            <button type="submit"><GrFormSearch /></button>
        </form>
    </div>
}