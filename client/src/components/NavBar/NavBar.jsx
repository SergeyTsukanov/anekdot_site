import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"


export const NavBar = (props) => {
    return   <div className={styles.NavBar_container}>
            <ul className={styles.ul_style}>
                <li className={styles.margin_tags}>
                    <NavLink to="/" exact className={styles.link} activeClassName={styles.active_link}>
                        Home
                </NavLink>
                </li>
                 
                <li className={styles.margin_tags}>
                    <NavLink to="/saved" className={styles.link} activeClassName={styles.active_link}>
                        Saved
                    </NavLink>
                </li>
                <li className={styles.margin_tags}>
                    <NavLink to="/about" className={styles.link} activeClassName={styles.active_link}>
                        About
                    </NavLink>
                </li>
          
                <li className={styles.margin_tags}>
                    <NavLink to="/addjoke" className={styles.link} activeClassName={styles.active_link}>
                        Add joke
                    </NavLink>
                </li>
            </ul>

        </div>
    


}