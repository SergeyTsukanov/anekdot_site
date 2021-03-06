import styles from "./Form.module.css";
import { useFormik } from "formik"
import { useContext, useState } from "react";
import { MyContext } from "../context";
import { Redirect } from "react-router";
import { registRequest } from "../request/Reqistration"

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = "requied"
  }
  if(!re.test(values.email) )
  errors.email = "email is incorrect"
  if (!values.login) {
    errors.login = "requied"
  }
  if (!values.password) {
    errors.password = "requied"
  
  }
  if(values.password.length<6){
    errors.password ="too short"
  }
  return errors;
}

export const RegForm = (props) => {
  const { state, setUser } = useContext(MyContext)
  const [serverError, setServerError] = useState("")
   
  const formik = useFormik({
    initialValues: {
      email: '',
      login: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      registRequest(JSON.stringify(formik.values))
        .then(res => res.json())
        .then(res => {

          if (res.status === "failed") {
            setServerError(res.text)
            return
          }
          setUser({
            login: res.login,
            token: res.token,
            savedPosts:res.savedPosts,
            likedPosts:res.likedPosts
          })
        })
        .catch(res => console.log(res))
      console.log(formik.values)
      formik.resetForm()
    }
  })

  if (state.user.login)
    return <Redirect to="/" />

  return (<form className={styles.Form} onSubmit={formik.handleSubmit}>
    <div className={styles.serverError}>{serverError}</div>
    <label className={styles.label_name}>
      Enter e-mail:
        <input className={formik.touched.email && formik.errors.email ? styles.inputs_error : styles.inputs}
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
      Enter Login:
        <input className={formik.login && formik.errors.login ?
        styles.inputs_error : styles.inputs}
        type="text"
        name="login"

        onChange={formik.handleChange}
        value={formik.values.login} />
    </label>

    {formik.touched.login && formik.errors.login ?
      <div className={styles.form_error}>{formik.errors.login}</div> :
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
