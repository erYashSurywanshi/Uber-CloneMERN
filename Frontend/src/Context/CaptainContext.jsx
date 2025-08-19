import { createContext, useState, useContext } from 'react';

export const CaptainDataContext = createContext();

export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to update captain data
    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    // Function to clear captain data (logout)
    const clearCaptain = () => {
        setCaptain(null);
    };

    const value = {
        captain,
        isLoading,
        error,
        updateCaptain,
        clearCaptain,
        setIsLoading,
        setCaptain,
        setError,
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

// Custom hook to use captain context
export const useCaptain = () => {
    const context = useContext(CaptainDataContext);
    if (!context) {
        throw new Error('useCaptain must be used within a CaptainProvider');
    }
    return context;
};

export default CaptainContext;