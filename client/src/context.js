import { createContext, useCallback, useReducer } from "react"
//export const MyContext = createContext()//themes of jokes

export const MyContext = createContext()
const initialState = {
    themes:["", "Армейский", "Студенческий", "Национальные", "Семейные", "Профессии"],
    user:{
        login:"",
        token:"",
    }
}
const reducer = (state,action) =>{
        switch (action.type) {
            case "SET_USER":
               
                return{
                    ...state,
                    user: action.data
                }
        }
}


export const MyContextProvider = ({children}) =>{
    const setUser = useCallback(data =>{
    dispatch({type:"SET_USER",data:data})
})


    const [state, dispatch] = useReducer(reducer,initialState)
 window.state = state
    return <MyContext.Provider value = {{state,setUser}}>
        {children}
    </MyContext.Provider>
}

