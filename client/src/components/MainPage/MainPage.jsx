import {  useCallback, useContext, useState } from "react";
import styles from "./MainPage.module.css";
import { Searchbar } from "../SearchBar/SearchBar";
import { Posts } from "./Posts";
import { MyContext } from "../../context";
 



export const MainPage = (props) => {

   const {state,setPosts} = useContext(MyContext)
   const posts = state.posts
    const [error, setError] = useState("")
    const [filter, setFilter] = useState({ title: "", type: "" })

    


    return <div className={styles.content}>
        <Searchbar setFilter={setFilter} />
        <Posts posts={posts}
            setPosts={setPosts}
            error={error}
            setError={ setError}
            filter={filter} />
    </div>
}