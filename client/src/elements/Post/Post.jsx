import styles from "./Post.module.css"
import {IoIosHeart,IoIosHeartEmpty } from "react-icons/io";
import { FaComment,FaPlus } from "react-icons/fa";
export const Post = (props) => {
        
    // fetch("/posts/addjoke", {
    //     method: 'PUT', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${state.user.token}` },
    //     body: JSON.stringify(formik.values)
    //   })
    //     .then(res => console.log(res))
    //     .catch(res => console.log(res))
    //   console.log(formik.values)
    return <div className={styles.post}>
        <div className={styles.post_container}>
            <div className={styles.post_header}>
                <div className={styles.post_title}>{props.title}</div>
                <div className={styles.post_author}>{props.type}</div>
            </div>
            <div className={styles.post_body}>
               {props.text}
            </div>
            <div className={styles.post_footer}>
                <div className={styles.post_footer_element}><IoIosHeartEmpty/></div>
                <div className={styles.post_footer_element}>  <FaComment/> </div>
                <div className={styles.post_footer_element}  ><FaPlus/></div>
               </div>
        </div>
    </div>
}