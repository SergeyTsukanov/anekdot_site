import { useEffect, useState } from "react";
import { Post } from "../../elements/Post/Post";
import styles from "./MainPage.module.css";
import { Searchbar } from "../SearchBar/SearchBar";



export const MainPage = (props) => {

   

    const [posts, setPosts] = useState("")
    const [error, setError] = useState("")
    useEffect(() => {

        fetch("/posts/all")

            .then(data => data.json())
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

     const [filter, setFilter] = useState({title:"",type:""}) 
    if(error)
        return <div>error</div>
    if (!posts)
        return <div>Loading</div>
    return <div className={styles.content}>
            <Searchbar setFilter = {setFilter}/>
            <div className ={styles.posts}>
        {posts
        .filter(post=>post.type.includes(filter.type)&& post.title.includes(filter.title))
        .map((post) =>  <Post text={post.text} title ={post.title} type = {post.type}/>).reverse()}
        </div>
    </div>
}