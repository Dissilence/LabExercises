import React from "react";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [username, setUsername] = React.useState(''); 

    return (
        <UserContext.Provider value={{username, setUsername}}>
            {props.children}
        </UserContext.Provider>
    );
}