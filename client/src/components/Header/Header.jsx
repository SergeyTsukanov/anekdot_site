import { useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { MyContext } from "../../context";
import styles from "./Header.module.css";



export const Header = (props) => {
  const { state, setUser } = useContext(MyContext)
  const Logout = () => {
    setUser({
      login: "",
      token: "",
      savedPosts:[]
    })
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo_container}>

          <NavLink to="/" className={styles.logo}>
            Jokes.com
            </NavLink>

        </div >
        {state.user.login ? <div className={styles.button_container}>
          <a className={styles.button_user}>
            {state.user.login}
          </a>
          <a className={styles.button_sign_up} onClick={Logout}>
            Logout
            </a>
        </div> :
          <div className={styles.button_container}>
            <NavLink to="/login" className={styles.button_log_in} >
              Log in
            </NavLink>
            <NavLink to="/signup" className={styles.button_sign_up}>
              Sign up
            </NavLink>

          </div>
        }
      </div>
    </header>
  );
};
