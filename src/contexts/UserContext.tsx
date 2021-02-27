import Cookies from "js-cookie";
import { createContext, ReactNode, useState } from "react";
interface userContextData{
    handleUserInput: (event)=> void;
    isUserValid: ()=> boolean;
    addUserCookie: () => void;
    logout: () => void;
}
interface userServerProps{
    children: ReactNode;
}

export const UserContext = createContext({} as userContextData);

export function UserProvider({children}: userServerProps){
    const [username, setUsername] = useState(null);
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)

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

    function logout(){
        setIsUserAuthenticated(false);
        Cookies.remove('username')
    }

    function addUserCookie()
    {
        Cookies.set('username', username);
        setIsUserAuthenticated(true);
    }

    return(
        <UserContext.Provider value={{
            handleUserInput,
            isUserValid,
            addUserCookie,
            logout,
        }}>
            {children}
        </UserContext.Provider>
    )
}