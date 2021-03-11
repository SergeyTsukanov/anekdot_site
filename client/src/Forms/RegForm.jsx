import styles from "./Form.module.css";
import { useFormik } from "formik"


const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = "requied"
  }
  if (!values.nickname) {
    errors.nickname = "requied"
  }
  if (!values.password) {
    errors.password = "requied"
  }
  return errors;
}

export const RegForm = (props) => {

  const formik = useFormik({
    initialValues: {
      email: '',
      nickname: '',
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

      <label className={styles.label_name}>
        Enter e-mail:
        <input className={formik.touched.email && formik.errors.email ?styles.inputs_error: styles.inputs}
          type="text"
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange} />
      </label>
      {formik.touched.email && formik.errors.email ?
        <div className={styles.form_error}>{formik.errors.email}</div> :
        <div className={styles.form_correct}>
          1111
          </div>}

      <label className={styles.label_name}>
        Enter Nickname:
        <input className={formik.touched.nickname && formik.errors.nickname ? 
        styles.inputs_error : styles.inputs}
          type="text"
          name="nickname"

          onChange={formik.handleChange}
          value={formik.values.nickname} />
      </label>

      {formik.touched.nickname && formik.errors.nickname ?
        <div className={styles.form_error}>{formik.errors.nickname}</div> :
        <div className={styles.form_correct}>
          1111
          </div>}

      <label className={styles.label_name}>
        Enter password:
        <input className={formik.touched.password && formik.errors.password ? styles.inputs_error : styles.inputs}
          type="password"
          name="password"

          onChange={formik.handleChange}
          value={formik.values.password} />
      </label>
      {formik.touched.password && formik.errors.password ?
        <div className={styles.form_error}>{formik.errors.password}</div> :
        <div className={styles.form_correct}>
          1111
          </div>}
      <button className={styles.button_submit} type="submit">Sign</button>
    </form>
  );
};
