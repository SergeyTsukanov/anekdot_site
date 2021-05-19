const ADDJOKE = "/posts/addjoke"
const SAVEJOKE = "/posts/savejoke"

export const AddJoke = (token,body) =>{      
   return fetch(ADDJOKE, {
    method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: body
  })}

  export const SaveJoke = (token,body) =>{      
    return fetch(SAVEJOKE, {
     method: 'PUT', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
     body: body
   })}

   export const RemoveJoke =(token,body) =>{
    return fetch("/posts/removejoke", {
      method: 'DELETE', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: body
    })
   }

   export const LikeJoke = (token,body)=>{
      return  fetch("/posts/likejoke", {
        method: 'PUT', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: body
      })
   }