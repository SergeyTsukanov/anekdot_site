import styles from "./Form.module.css";
import { useFormik } from "formik"

const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = "requied"
  }
  if (!values.password) {
    errors.password = "requied"
  }
  return errors;
}

export const LogInForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm()
    }
  })


  return (
    <form className={styles.Form} onSubmit={formik.handleSubmit}>
      <div className={styles.form_body}>
        <label className={styles.label_name}>
          Enter e-mail:
        <input className={styles.inputs}
            type="text"
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange} />
        </label>
        {formik.touched.email && formik.errors.email ?
          <div className={styles.form_error}>
            {formik.errors.email}
          </div>
          : <div className={styles.form_correct}>1111</div>}

        <label className={styles.label_name}>
          Enter password:
        <input className={ styles.inputs }
            type="text"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password} />
        </label>
        {formik.touched.password && formik.errors.password ?
          <div className={styles.form_error}>
            {formik.errors.password}</div> 
            :
          <div className={styles.form_correct}>
            1111
          </div>}
          <button className={styles.button_submit} type="submit" >Log In </button>
      </div>
    </form>
  );
};
