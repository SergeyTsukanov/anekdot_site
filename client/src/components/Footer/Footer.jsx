import styles from "./Footer.module.css";

export const Footer = (props) =>{
    return <footer>
        <div className={styles.footer}>
            <div className={styles.footer_icons}>
                <ul>
                    <li><a href="#" target="black"><i ClassName={styles.facebook_icon}></i></a></li>
                    <li><a href="#" target="black"><i ClassName={styles.twitter_icon}></i></a></li>
                    <li><a href="#" target="black"><i ClassName={styles.instagram_icon}></i></a></li>
                </ul>
            </div>
            <div className={styles.footer_content}>
                <ul>
                    <li><a href="#" target="black">Home</a></li>
                    <li><a href="#" target="black">About</a></li>
                    <li><a href="#" target="black">Contact us</a></li>
                </ul>
            </div>
        </div>
    </footer>
}