import { useContext } from "react"
import { MyContext } from "../../context"
import { Post } from "../MainPage/Post/Post"
import {styles} from "./PostComments.module.css"

export const PostComments = (props)=>{
    
    const {state} = useContext(MyContext)
    const post = state.posts.filter(el => {return el._id===props.match.params._id})[0]
    console.log(post[0] );
    return<div>
         
           <Post  
                likesCount ={post.likesCount} 
                text={post.text}
                    title={post.title}
                    type={post.type}
                    _id={post._id} />  
                   
       
        <div>
            comments
        </div>
    </div>
}
