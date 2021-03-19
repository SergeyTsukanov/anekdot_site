import styles from "./Form.module.css";
import { useFormik } from "formik"
import { useContext, useState } from "react";
import { MyContext } from "../context";
import { Redirect } from "react-router";
import { STATES } from "mongoose";

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
  const [serverError,setServerError] = useState("")
  const { state,setUser } = useContext(MyContext)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      fetch("/auth/login", {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formik.values)
      })
        .then(res => {
          return res.json()
        })
        .then(res => {
          
          if(res.status === "failed")
          {
            setServerError(res.text)
            return
          }
          setUser({
            login: res.login,
            token: res.token,
          }) 
           
        })
        .catch(error => console.log(error))
      console.log(formik.values)
      formik.resetForm()
      
      
    }
  })
    if(state.user.login)
      return <Redirect to = "/"/>

  return ( <form className={styles.Form} onSubmit={formik.handleSubmit}>
      <div className ={styles.serverError}>{serverError}</div>
      <div className={styles.form_body}>
        <label className={styles.label_name}>
          Enter e-mail:
        <input className={formik.touched.email && formik.errors.email ? styles.inputs_error : styles.inputs}
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
        <input className={formik.touched.password && formik.errors.password ?styles.inputs_error: styles.inputs }
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
