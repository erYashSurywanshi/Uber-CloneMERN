import React, { createContext, useState } from 'react';

export const UserDataContext = createContext();

 const UserContext = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
   
    const [user, setUser] = useState({
        email:'',
        fullname:{
            firstname:'',
            lastname:''
        },
    });

    
    const value = {
        isLoading,
        error,
        setIsLoading,
        setError,
    };
    return (
        <UserDataContext.Provider value={{ user, setUser, value }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserContext;