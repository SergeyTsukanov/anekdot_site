import styles from "./Post.module.css"
import {IoIosHeart,IoIosHeartEmpty } from "react-icons/io";
import { FaComment,FaPlus } from "react-icons/fa";
export const Post = (props) => {


    return <div className={styles.post}>
        <div className={styles.post_container}>
            <div className={styles.post_header}>
                <div className={styles.post_title}>Name</div>
                <div className={styles.post_author}>Author</div>
            </div>
            <div className={styles.post_body}>
               {props.text}
            </div>
            <div className={styles.post_footer}>
                <div className={styles.post_footer_element}><IoIosHeartEmpty/></div>
                <div className={styles.post_footer_element}>  <FaComment/> </div>
                <div className={styles.post_footer_element}><FaPlus/></div>
               </div>
        </div>
    </div>
}