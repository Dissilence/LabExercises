import React from "react";

//named export for this context (to be used via useContext elsewhere)
export const UserContext = React.createContext();

//the provider wrapper for this context. uses its own state to keep track of which theme is in use
export const UserProvider = ({children}) => {
    const [username, setUsername] = React.useState(''); //default username

    return (
        <UserContext.Provider value={{username, setUsername}}>
            {children}
        </UserContext.Provider>
    );
}