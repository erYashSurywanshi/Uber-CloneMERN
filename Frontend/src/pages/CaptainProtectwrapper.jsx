import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCaptain } from '../Context/CaptainContext';
import axios from 'axios';

const CaptainProtectwrapper = ({ children }) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { setCaptain } = useCaptain(); // Fix typo: setcaptain -> setCaptain
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate("/Captain-login");
            return;
        }

        const fetchCaptainProfile = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/captains/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {
                    setCaptain(response.data.captain);
                    setIsLoading(false);
                }
            } catch (err) {
                localStorage.removeItem("token");
                navigate("/Captain-login");
            }
        };

        fetchCaptainProfile();
    }, [token, navigate, setCaptain]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default CaptainProtectwrapper;