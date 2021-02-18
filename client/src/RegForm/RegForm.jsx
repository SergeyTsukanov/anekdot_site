import styles from "./RegForm.module.css";

export const RegForm = (props) => {
  return (
    <form className={styles.RegForm}>
      <label className={styles.label_name}>
        Enter e-mail:
        <input className={styles.inputs} type="text" />
      </label>
      <label className={styles.label_name}>
        Enter Nickname:
        <input className={styles.inputs} type="text" />
      </label>
      <label className={styles.label_name}>
        Enter password:
        <input className={styles.inputs} type="text" />
      </label>
      <div>
        <input className={styles.next_button} type="submit" value="Next" />
      </div>
      <div className={styles.back_button}> </div>
    </form>
  );
};
