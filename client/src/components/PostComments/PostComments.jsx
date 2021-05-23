 
import { useEffect, useState } from "react"
import Loader from "react-spinners/ClipLoader"
import { Post } from "../MainPage/Post/Post"
import styles from "./PostComments.module.css"

export const PostComments =(props) =>{

    const [error,setError] = useState("")
    const [loading,setLoading] = useState(true)
    const [post,setPost] = useState({})
    useEffect(()=>{
        setLoading(true)
        fetch(`/posts/${props.match.params.id}`)
            .then(data => data.json())
            .then(
                data => {
                    setPost(data)
                    console.log("here",data)
                })
            .catch(e => {
                console.log("error")
                setError(e)
            })
            .finally(()=>{
                setLoading(false)
            })
    },[])
    if(error)
    return<div>${error}</div>
    if(loading)
    return <div className ={styles.post_comments_loader}>
        <Loader  size={150} />
        </div>
    return <div>
        <Post  text={post.text}
                    title={post.title}
                    type={post.type}
                    _id={ post._id} 
                    likesCount ={post.likesCount} />
                    
        <div>Comments</div>
    </div>
}

