import styles from "./RegForm.module.css";
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
    <form className={styles.RegForm} onSubmit ={formik.handleSubmit}>

      <label className={styles.label_name}>
        Enter e-mail:
        <input className={styles.inputs}
          type="text"
          name='email'
         
          value={formik.values.email}
          onChange={formik.handleChange} />
      </label>
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label className={styles.label_name}>
        Enter Nickname:
        <input className={styles.inputs}
          type="text"
          name="nickname"
          
          onChange={formik.handleChange}
          value={formik.values.nickname} />
      </label>

       {formik.touched.nickname && formik.errors.nickname ? <div>{formik.errors.nickname}</div> : null}

      <label className={styles.label_name}>
        Enter password:
        <input className={styles.inputs} 
        type="text"      
        name="password"
        
        onChange={formik.handleChange}
        value={formik.values.password} />
      </label>
      {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
    
      <div>
        <input className={styles.next_button} type="submit" value="Next" />
      </div>
      <div className={styles.back_button}> </div>
    </form>
  );
};
