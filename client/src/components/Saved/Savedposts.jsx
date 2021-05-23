import { useContext, useEffect } from "react"
import { Redirect } from "react-router"
import { MyContext } from "../../context"
import { Post } from "../MainPage/Post/Post"
 

export const Savedposts =(props) =>{
    const {state} = useContext(MyContext)
    if(!state.user.login)
        return <Redirect to ="/login"/>
    return <div>
        {state.user.savedPosts.map((post,key) =>
                <Post key={key}  text={post.text}
                likesCount ={post.likesCount}
                    title={post.title}
                    type={post.type}
                    _id={post._id} />)}
    </div>
}