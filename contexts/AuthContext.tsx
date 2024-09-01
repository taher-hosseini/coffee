import React, {createContext, useContext, useEffect, useState} from 'react';
import {router} from "next/client";
import {useRouter} from "next/router";

interface AuthContextProps{
    isAuthenticated:boolean,
    login: (token: string) => void,
    logout: () => void
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);
const AuthProvider =({children}:{children:React.ReactNode })=>{
    const router = useRouter();
    const [isAuthenticated,setIsAuthenticated] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true); // اضافه کردن حالت بارگذاری

    useEffect(() => {
        const checkAuth = () => {
            const storedToken = localStorage.getItem('token');
            setIsAuthenticated(!!storedToken);
            setLoading(false); // تغییر به false بعد از بارگذاری
        };
        checkAuth();
    }, []);

    const login=(token: string)=>{
        setIsAuthenticated(true)
        localStorage.setItem('token', token);
        router.push('/profile');
    }
    const logout=()=>{
        setIsAuthenticated(false)
        localStorage.removeItem('token');
        router.push('/');
    }

    if (loading) {
        return <p>Loading...</p>; // نمایش پیام بارگذاری
    }

    return(
        <AuthContext.Provider value={{isAuthenticated ,login , logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider