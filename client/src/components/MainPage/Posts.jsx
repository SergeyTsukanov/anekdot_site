import React, { useContext, useEffect, useMemo } from "react"
import { Post } from "./Post/Post"
import styles from "./Posts.module.css"
import { Loader } from "../../elements/Preloader";



const prepare = (a) => {         //for filtering
    return a.toLowerCase().split(" ").join("")
}

 

export const Posts =  (props) => {

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

  

    if (props.error)
        return <div>error</div>
    if (!props.posts)
        return <Loader size={150} />
    return <div className={styles.posts}>
        {props.posts
            .filter(post => post.type.includes(props.filter.type) && prepare(post.title).includes(prepare(props.filter.title)))
            .map((post,key) =>
                <Post key={key}  text={post.text}
                    title={post.title}
                    type={post.type}
                    _id={post._id} />).reverse() }
    </div>
} 

