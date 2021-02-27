import Cookies from "js-cookie";
import { createContext, ReactNode, useState } from "react";
import {useRouter} from 'next/router'
interface userContextData{
    handleUserInput: (event)=> void;
    isUserValid: ()=> boolean;
    addUserCookie: () => void;
}
interface userServerProps{
    children: ReactNode;
}

export const UserContext = createContext({} as userContextData);

export function UserProvider({children}: userServerProps){
    const [username, setUsername] = useState(null);
    
    function handleUserInput(event){
        setUsername(event.target.value);    
        console.log(username);
    }

    function isUserValid(){
        if(username.length > 5){
            return true;
        }
        else{
            return false;
        }
    }

    function addUserCookie()
    {
        Cookies.set('username', username);
    }

    return(
        <UserContext.Provider value={{
            handleUserInput,
            isUserValid,
            addUserCookie
        }}>
            {children}
        </UserContext.Provider>
    )
}