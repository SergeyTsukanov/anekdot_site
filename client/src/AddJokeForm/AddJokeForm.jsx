import {useFormik} from "formik"
import styles from "./AddJokeForm.module.css"
const validate = values =>{
    const errors = {}
    if (!values.title) {
      errors.title = "requied"
    }
    if (!values.text) {
      errors.text = "requied"
    }
 
    return errors;
     
}


export const AddJokeForm  =(props)=>{
    const formik = useFormik({
        initialValues:{
            text:'',
            title:''
        },
        validate,
        onSubmit: values=>{
             fetch("/posts/addjoke",{method:'POST', headers: {'Content-Type': 'application/json'},
             body: JSON.stringify( formik.values)  })
             .then(res =>console.log(res))
             .catch(res =>console.log(res))  
            console.log(formik.values)
            formik.resetForm()
        }
    })

    return <form className ={styles.JokeForm} onSubmit ={formik.handleSubmit}>
      <label className ={styles.label_name} >
        Enter title:
        <input  className ={styles.inputs}
        type="text"      
        name="title"
        onChange={formik.handleChange}
        value={formik.values.title} />
      </label>
      {formik.touched.title && formik.errors.title ? <div>{formik.errors.title}</div> : null}

      <label className ={styles.label_name}  >
        Enter text:
        <input  className ={styles.inputs}
        type="text"      
        name="text"
        onChange={formik.handleChange}
        value={formik.values.text} />
      </label>
      {formik.touched.text && formik.errors.text ? <div>{formik.errors.text}</div> : null}
      <div>
        <input  type="submit" value="Add" />
      </div>
    </form>
}