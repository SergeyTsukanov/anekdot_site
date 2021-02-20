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
                    <NavLink to="/posts" className={styles.link} activeClassName={styles.active_link}>
                        Posts
                        </NavLink></li>
                <li className={styles.margin_tags}>
                    <NavLink to="/liked" className={styles.link} activeClassName={styles.active_link}>
                        Liked
                    </NavLink>
                </li>
                <li className={styles.margin_tags}>
                    <NavLink to="/about" className={styles.link} activeClassName={styles.active_link}>
                        About
                    </NavLink>
                </li>
                <li className={styles.margin_tags}>
                    <NavLink to="/news" className={styles.link} activeClassName={styles.active_link}>
                        News
                    </NavLink>
                </li>
                <li className={styles.margin_tags}>
                    <NavLink to="/suggestion" className={styles.link} activeClassName={styles.active_link}>
                        Suggestions
                    </NavLink>
                </li>
            </ul>

        </div>
    


}