import React from 'react'
import { useContext, useState, useEffect } from 'react'

export const CurrentUserContext = React.createContext({})

// export default function UserProvider() {
//     const [current_user, setCurrentUser] = useState({})
//     useEffect(() => {
//         api.post("/auth/login", data)
//         .then(resp => {
//         localStorage.setItem('token', resp.data.token);
//         })
//         .catch(error => console.error(error.message))
//     })

//     return (
//         <UserContext.Provider value={current_user}>
//             {children}
//         </UserContext.Provider>
//     )
// }
