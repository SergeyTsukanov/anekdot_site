import styles from './Header.module.css'

export const Header = (props) => {
    return <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logo_container}>
                <h1 class={styles.logo}>Jokes.com</h1>
            </div>
            <div className={styles.button_container}>
                <a class={styles.button_log_in} href="#signin">Log In</a>
                <a class={styles.button_sign_up} href="signup">Sign Up</a>
            </div>
        </div>
    </header>
}