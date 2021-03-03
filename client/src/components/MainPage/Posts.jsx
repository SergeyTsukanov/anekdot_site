import { useEffect } from "react"
import { Post } from "../../elements/Post/Post"
import styles from "./Posts.module.css"


export const Posts = (props) =>{
    useEffect(() => {

        fetch("/posts/all")

            .then(data => data.json())
            .then(
                data => {
                    props.setPosts(data)
                    console.log(data)
                })
            .catch(e => {
                console.log("error")
                props.setError(e)
            })
    }, [])
    if(props.error)
    return <div>error</div>
if (!props.posts)
    return <div>Loading</div>
    return <div className ={styles.posts}>
    {props.posts
    .filter( post =>  post.type.includes(props.filter.type)&& post.title.includes(props.filter.title))
    .map((post) =>  <Post text={post.text} title ={post.title} type = {post.type}/>).reverse()}
    </div>
}

