import styles from "./Post.module.css"
import { IoIosHeartEmpty } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import { FaComment, FaPlus } from "react-icons/fa";
import React, { useContext } from "react";
import { MyContext } from "../../../context";
import { RemoveJoke, SaveJoke } from "../../../request/Jokes";


export const Post =  (props) => {
    
    const { state,UpdateSavedJokes } = useContext(MyContext)
    const savedPostsIds = state.user.savedPosts.map(el =>el._id)
    const isSaved = savedPostsIds.includes(props._id.toString())
    const savePost = () =>{
        SaveJoke(state.user.token,JSON.stringify({_id:props._id,login:state.user.login}))
        .then(res =>res.json())
        .then(res =>{console.log(res.savedPosts)
            UpdateSavedJokes(res.savedPosts)
                        })
        .catch(e =>(console.log(e)))
        
    }

    const deletePost =() =>{
        RemoveJoke(state.user.token,JSON.stringify({_id:props._id,login:state.user.login}))
        .then(res =>res.json())
        .then(res =>{console.log(res.savedPosts)
            UpdateSavedJokes(res.savedPosts)
                        })
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
                {!state.user.login ? <div></div> :
                 !isSaved ?
                    <div className={styles.post_footer_element} onClick ={savePost}> <FaPlus /></div> :
                    <div className={styles.post_footer_element} onClick ={deletePost}><AiFillDelete/></div>
                }
            </div>
        </div>
    </div>
}   