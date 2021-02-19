import { useEffect, useState } from "react";
import { Post } from "../elements/Post";
import styles from "./MainPage.module.css";



export const MainPage = (props) => {

    const [posts, setPosts] = useState("")
    const [error, setError] = useState("")
    useEffect(() => {

        fetch("/posts/all")

            .then(data => data.json()

            )
            .then(
                data => {
                    setPosts(data)
                    console.log(data)
                })
            .catch(e => {
                console.log("error")
                setError(e)
            })
    }, [])
    if(error)
        return <div>error</div>
    if (!posts)
        return <div>Loading</div>
    return <div className={styles.content}>
     
        {posts.map((post) =>  <Post text={post.text} />   )}

    </div>
}