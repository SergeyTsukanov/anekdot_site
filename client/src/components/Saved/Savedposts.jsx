import { useContext, useEffect } from "react"
import { Redirect } from "react-router"
import { MyContext } from "../../context"
import { Post } from "../MainPage/Post/Post"
import { SavedPost } from "./SavedPost"
import styles from "./Savedposts.module.css"

export const Savedposts =(posts) =>{
    const {state} = useContext(MyContext)
    if(!state.user.login)
        return <Redirect to ="/login"/>
    return <div>
        {state.user.savedPosts.map((post,key) =>
                <SavedPost key={key}  text={post.text}
                    title={post.title}
                    type={post.type}
                    _id={post._id} />)}
    </div>
}