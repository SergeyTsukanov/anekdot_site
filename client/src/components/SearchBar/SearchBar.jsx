import styles from "./SearchBar.module.css"
import { GrFormSearch } from "react-icons/gr";

import { useFormik } from "formik";
import { AiOutlineClear } from "react-icons/ai";
import { useContext } from "react";
import { MyContext } from "../../context";

export const Searchbar = (props) => {

    const { state } = useContext(MyContext)
    console.log(state)
    const themes = state.themes

    const formik = useFormik({
        initialValues: {
            title: "",
            type: "",
        },
        onSubmit: values => {
            console.log(formik.values)
            props.setFilter({
                type: formik.values.type,
                title: formik.values.title
            })

        }
    })
    return <div className={styles.pannel}>

        <form onSubmit={formik.handleSubmit}  >

            <button className={styles.FilterButton} type='reset' onClick={() => {
                formik.setValues({
                    title: "",
                    type: "",
                })
            }}><AiOutlineClear size='17px' className={styles.filterIcon} />
            </button>
            <select className={styles.pannel_filter}
                name="type" onChange={formik.handleChange}
                value={formik.values.type}>
                {themes.map(theme => <option value={`${theme}`}>{theme}</option>)}
            </select>
            <input name="title" className={styles.pannel_button} onChange={formik.handleChange} value={formik.values.title} />
            <button className={styles.SubmitButton} type="submit"><GrFormSearch size='17px' /></button>
        </form>
    </div>
}