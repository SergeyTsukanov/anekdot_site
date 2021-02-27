import { useFormik } from "formik"
import styles from "./Form.module.css"
const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = "requied"
  }
  if (!values.text) {
    errors.text = "requied"
  }
  if(!values.type){
    errors.text = "requied"
  }
  return errors;

}


export const AddJokeForm = (props) => {

  const themes = ["", "Армейский", "Студенческий","Про вовочку"]

  const formik = useFormik({
    initialValues: {
      text: '',
      title: '',
      type: ''
    },
    validate,
    onSubmit: values => {
      fetch("/posts/addjoke", {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formik.values)
      })
        .then(res => console.log(res))
        .catch(res => console.log(res))
      console.log(formik.values)
      formik.resetForm()
    }
  })

  return <form className={styles.Form} onSubmit={formik.handleSubmit}>
    <label className={styles.label_name} >
      Enter title:
        <input className={styles.inputs}
        type="text"
        name="title"
        onChange={formik.handleChange}
        value={formik.values.title} />
    </label>
    {formik.touched.title && formik.errors.title ? <div>{formik.errors.title}</div> : <div className={styles.form_correct}>1111</div>}

    <label className={styles.label_name}  >
      Enter text:
        <input className={styles.inputs}
        type="text"
        name="text"
        onChange={formik.handleChange}
        value={formik.values.text} />
    </label>
    {formik.touched.text && formik.errors.text ? <div>{formik.errors.text}</div> : <div className={styles.form_correct}>1111</div>}


    <label className={styles.label_name}  >
      Enter type:
        <select name="type"
        onChange={formik.handleChange} value = {formik.values.type}>
      {themes.map(theme =><option value ={`${theme}`}>{theme}</option>)}
        </select>
    </label>
    <div>
    {formik.touched.type && formik.errors.type ? <div>{formik.errors.type}</div> : <div className={styles.form_correct}>1111</div>}
    </div>
   <button className={styles.button_submit} type="submit">Add</button>
  </form>
}