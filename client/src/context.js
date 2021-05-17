import { createContext, useCallback, useReducer } from "react"

export const MyContext = createContext()
const initialState = {
    themes: ["", "Армейский", "Студенческий", "Национальные", "Семейные", "Профессии"],
    user: {
        login: localStorage.getItem('login')||"",
        token: localStorage.getItem('token')||"",
        savedPosts: JSON.parse( localStorage.getItem('savedPosts'))||{} 
    },
    posts: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            localStorage.setItem('login',action.data.login)
            localStorage.setItem('token',action.data.token)
            localStorage.setItem('savedPosts',JSON.stringify(action.data.savedPosts) )
            return {
                ...state,
                user: action.data
            }
        case "UPDATE_SAVED_JOKES":
            localStorage.setItem('savedPosts',JSON.stringify(action.data))
            return {
                ...state,
                user: {
                    ...state.user,
                    savedPosts: action.data
                }
            }
        case "SET_POSTS":
            return {
                ...state,
                posts: action.data
            }
    }
}


export const MyContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)
        const setUser =useCallback( data => {
        dispatch({ type: "SET_USER", data: data })
    },[dispatch])
    const UpdateSavedJokes = useCallback( item => {
        dispatch({ type: "UPDATE_SAVED_JOKES", data: item })
    },[dispatch])
    const setPosts =useCallback( data =>{
        dispatch({type:"SET_POSTS",data:data})
    },[dispatch])
    window.state = state
    return <MyContext.Provider value={{ state, setUser, UpdateSavedJokes,setPosts }}>
        {children}
    </MyContext.Provider>
}

