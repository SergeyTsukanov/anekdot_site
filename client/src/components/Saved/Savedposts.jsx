import { useContext } from "react"
import { Redirect } from "react-router"
import { MyContext } from "../../context"
import {styles} from "./Savedposts.module.css"

export const Savedposts =(posts) =>{
    const {state} = useContext(MyContext)
    const savedPosts = []

    if(!state.user.login)
        return <Redirect to ="/login"/>
    return <div>
        {state.user.login}
    </div>
}