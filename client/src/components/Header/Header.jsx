import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          
            <NavLink to="/" className={styles.logo}>
              Jokes.com
            </NavLink>{" "}
           
        </div>
        <div className={styles.button_container}>
          <a className={styles.button_log_in} href="/login">
            Log in
          </a>
          <a className={styles.button_sign_up} href="/signup">
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
};
