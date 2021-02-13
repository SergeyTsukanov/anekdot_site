import { useEffect, useState } from "react";
import { Post } from "../elements/Post";
import styles from "./MainPage.module.css";
 

const GetText = () =>{
    fetch("http://localhost:9000/text" )
     
        .then(data => data.text()
            
        ).then(data =>console.log(data)).
        catch(e =>
            console.log("error"))
    
}
export const MainPage =(props) =>{
    
    const [posts,setPosts] = useState("")
    useEffect(()=>{
        
            fetch("http://localhost:9000/text" )
             
                .then(data => data.text()
                    
                ).then(data =>setPosts(data)).
                catch(e =>
                    console.log("error")) 
    },[])   
    return<div className ={styles.content}>
         <div>{posts}</div>
         
    </div>
}