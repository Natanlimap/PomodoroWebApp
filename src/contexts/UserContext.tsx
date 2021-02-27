import { createContext, ReactNode, useState } from "react";

interface userContextData{
    username: string;
}
interface userServerProps{
    children: ReactNode;
}

export const UserContext = createContext({} as userContextData);

export function UserProvider({children}: userServerProps){
    const [username, setUsername] = useState(null);

    return(
        <UserContext.Provider value={{
            username,
        }}>
            {children}
        </UserContext.Provider>
    )
}