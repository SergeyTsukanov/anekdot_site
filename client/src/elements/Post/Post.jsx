import styles from "./Post.module.css"
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { FaComment, FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "../../context";
import { SaveJoke } from "../../request/Jokes";

export const Post = (props) => {

    const { state } = useContext(MyContext)
    const savedPosts = state.user.savedPosts
    const isSaved = savedPosts.includes(props._id.toString())
    const savePost = () =>{
        SaveJoke(state.user.token,JSON.stringify({_id:props._id,login:state.user.login}))
        .then(res =>console.log(res))
        .catch(e =>(console.log(e)))
    }

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
                <div className={styles.post_footer_element}><IoIosHeartEmpty /></div>
                <div className={styles.post_footer_element}>  <FaComment /> </div>
                {state.user.login && !isSaved ?
                    <div className={styles.post_footer_element} onClick ={savePost}> <FaPlus /></div> :
                    <div className={styles.post_footer_element}></div>
                }
            </div>
        </div>
    </div>
}