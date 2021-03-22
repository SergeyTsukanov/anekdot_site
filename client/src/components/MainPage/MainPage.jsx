import {  useState } from "react";
import styles from "./MainPage.module.css";
import { Searchbar } from "../SearchBar/SearchBar";
import { Posts } from "./Posts";
 



export const MainPage = (props) => {

   
    const [posts, setPosts] = useState("")
    const [error, setError] = useState("")
    const [filter, setFilter] = useState({ title: "", type: "" })
    
    


    return <div className={styles.content}>
        <Searchbar setFilter={setFilter} />
        <Posts posts={posts}
            setPosts={setPosts}
            error={error}
            setError={setError}
            filter={filter} />
    </div>
}