import styles from './Header.module.css'

export const Header = (props) => {
    return <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logo_container}>
                <h1 class={styles.logo}>Jokes.com</h1>
            </div>
            <div className={styles.button_container}>
                <a class={styles.button} href="#signin">Sign In</a>
                <a class={styles.button} href="signup">Sign Up</a>
            </div>
        </div>
    </header>
}