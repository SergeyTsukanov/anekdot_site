import styles from './Header.module.css'

export const Header = (props) => {
    return <header className={styles.header}>
        <div className ={styles.logo_container}>
            <span class={styles.logo}>Anekdotiki</span>
        </div>
        
        <div class={styles.hright}>
            <a class={styles.button_active} href="#signin">Sign In</a>
            <a class={styles.button_active} href="signup">Sign Up</a>
        </div>
    </header>
}