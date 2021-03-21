const SIGNUP = "/auth/signup"
const LOGIN = "/auth/login"

export const registRequest = (body) => {
    return fetch(SIGNUP, {
        method: "POST", headers: { 'Content-Type': 'application/json' },
        body: body})
}

export const LoginRequest =(body) =>{
   return fetch(LOGIN, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: body
      })
}