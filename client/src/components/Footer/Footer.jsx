import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {  FaYoutube } from "react-icons/fa";
export const Footer = (props) =>{
    return <footer className={styles.footer}>
            <div className={styles.footer_icons}>
                <ul className={styles.footer_icons_list}>
                    <li className={styles.footer_icons_item}><a href="https://uk-ua.facebook.com/" target="_blank"><FaFacebook color="white"/></a></li>
                    <li className={styles.footer_icons_item}><a href="https://www.instagram.com/"  target="_blank"><FaInstagram color="white"/></a></li>
                    <li className={styles.footer_icons_item}><a href="https://www.youtube.com/" target="_blank">< FaYoutube color="white"/></a></li>
                </ul>
            </div>
            <div className={styles.footer_content}>
                <ul>
                    <li><a href="#" target="black">Home</a></li>
                    <li><a href="#" target="black">About</a></li>
                    <li><a href="#" target="black">Contact us</a></li>
                </ul>
                
            </div>
        
    </footer>
}