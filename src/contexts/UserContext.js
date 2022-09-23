import { createContext, useState, useEffect } from 'react';

const UserContext = createContext(null);

const UserProvider = (props) => {

    const localLogCheck = () => {
        const checkLocal = JSON.parse(localStorage.getItem('USER_AUTH')) || "";
        if (checkLocal) {
            return checkLocal;
        } else {
            return "";
        }
    }

    const [loggedInUser, setLoggedInUser] = useState(localLogCheck);

    useEffect( () => {
        localStorage.setItem('USER_AUTH', JSON.stringify(loggedInUser));
    }, [loggedInUser]);

    return (
        <UserContext.Provider value = {{ loggedInUser, setLoggedInUser }}>
            {props.children}
        </UserContext.Provider>

    );
};

export { UserContext, UserProvider };