import styles from "./NavBar.module.css"


export const NavBar = (props) =>{
    return <div className={styles.NavBar}>
        <div className={styles.NavBar_container}>
                <h1 className={styles.NavBar_home}>Home</h1>
                <div className={styles.hr_style}></div>
                <ul className={styles.ul_style}>
                    <li className={styles.margin_tags}>Posts</li>
                    <li className={styles.margin_tags}>Liked</li>
                    <li className={styles.margin_tags}>Saved</li>
                    <li className={styles.margin_tags}>Friends</li>
                    <li className={styles.margin_tags}>News</li>
                    <li className={styles.margin_tags}>Suggestions</li>
                </ul>
                <div className={styles.hr_style}></div>
            </div>
        </div>

    
}