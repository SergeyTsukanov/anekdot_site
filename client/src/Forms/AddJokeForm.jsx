import { useFormik } from "formik"
import { useContext } from "react"
import { Redirect } from "react-router"
import { MyContext } from "../context"
import styles from "./Form.module.css"

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = "requied"
  }
  if (!values.text) {
    errors.text = "requied"
  }
  if (!values.type) {
    errors.type = "requied"
  }
  return errors;

}


export const AddJokeForm = (props) => {
  const { state } = useContext(MyContext)
  const formik = useFormik({
    initialValues: {
      text: '',
      title: '',
      type: '',
      author: state.user.login
    },
    validate,
    onSubmit: values => {
      fetch("/posts/addjoke", {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${state.user.token}` },
        body: JSON.stringify(formik.values)
      })
        .then(res => console.log(res))
        .catch(res => console.log(res))
      console.log(formik.values)
      formik.resetForm()
    }
  })

  console.log(state.user.login)
  if (!state.user.login)
    return <Redirect to="/login" />
  const themes = state.themes


  return  <form className={styles.Form} onSubmit={formik.handleSubmit}>
      <label className={styles.label_name} >
        Enter title:
        <input className={styles.inputs}
          type="text"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title} />
      </label>
      {formik.touched.title && formik.errors.title ?
        <div className={styles.form_error}>{formik.errors.title}</div> :
        <div className={styles.form_correct}>1111</div>}

      <label className={styles.label_name}  >
        Enter text:
        <textarea className={styles.textArea}
          type="text"
          name="text"
          onChange={formik.handleChange}
          value={formik.values.text} />
      </label>
      {formik.touched.text && formik.errors.text ?
        <div className={styles.form_error}>{formik.errors.text}</div> :
        <div className={styles.form_correct}>1111</div>}


      <label className={styles.label_name}  >
        Enter type:
        <select name="type"
          onChange={formik.handleChange} value={formik.values.type}>
          {themes.map(theme => <option value={`${theme}`}>{theme}</option>)}
        </select>
      </label>

      {formik.touched.type && formik.errors.type ?
        <div className={styles.form_error}>{formik.errors.type}</div> :
        <div className={styles.form_correct}>1111</div>}

      <button className={styles.button_submit} type="submit">Add</button>
    </form>
     
  
}