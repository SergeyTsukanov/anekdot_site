const ADDJOKE = "/posts/addjoke"
const SAVEJOKE = "/posts/savejoke"

export const AddJoke = (token,body) =>{      
   return fetch(ADDJOKE, {
    method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: body
  })}

  export const SaveJoke = (token,body) =>{      
    return fetch("/posts/savejoke", {
     method: 'PUT', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
     body: body
   })}