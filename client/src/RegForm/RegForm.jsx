import styles from "./RegForm.module.css";

export const RegForm = (props) => {
  return (
    <form className={styles.RegForm}>
      {/* <div className={styles.RegForm_container}> */}
        {/* <div className={styles.inputs}> */}
          {/* <div className={styles.inputs_container}> */}
            {/* <div className={styles.email_input}> */}
              <label className={styles.label_name}>
                Enter e-mail: 
                <input className={styles.inputs} type="text" />
              </label>
            {/* </div> */}
            {/* <div className={styles.nickname_input}> */}
              <label className={styles.label_name}>
                Enter Nickname:
                <input className={styles.inputs} type="text" />
              </label>
            {/* </div> */}
            {/* <div className={styles.password_input}> */}
              <label className={styles.label_name}>
                Enter password:
                <input className={styles.inputs} type="text" />
              </label>
            {/* </div> */}
          {/* </div> */}
          {/* <div classname={styles.buttons}> */}
            {/* <div className={styles.buttons_container}> */}
              <div>
                <input className={styles.next_button}  type="submit" value="Next" />
              </div>
              <div className={styles.back_button}> </div>
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </form>
  );
};
