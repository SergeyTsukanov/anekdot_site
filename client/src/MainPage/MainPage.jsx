import { useEffect, useState } from "react";
import { Post } from "../elements/Post";
import styles from "./MainPage.module.css";
 

 
export const MainPage =(props) =>{
    
    const [posts,setPosts] = useState("")
    useEffect(()=>{
        
            fetch("/text" )
             
                .then(data => data.text()
                    
                ).then(data =>setPosts(data)).
                catch(e =>
                    console.log("error")) 
    },[])   
    return<div className ={styles.content}>
         <div>{posts}</div>
         
    </div>
}