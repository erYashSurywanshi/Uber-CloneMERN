import React, { useContext, useState, useEffect } from 'react';
import { UserDataContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectwrapper = ({ children }) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { setUser } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            if (response.status === 200) {
                setUser(response.data.user);
                setIsLoading(false);
            }
        }).catch((err) => {
            localStorage.removeItem("token");
            navigate("/login");
        });
    }, [token]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default UserProtectwrapper;