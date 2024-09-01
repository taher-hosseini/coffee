import React, {useContext, useEffect} from 'react';
import {AuthContext} from "@/contexts/AuthContext";
import {useRouter} from "next/router";

export default function Profile() {
    const authContext = useContext(AuthContext);
    const router = useRouter();
    if (!authContext) {
        return <p>Error: AuthContext not found</p>;
    }

    useEffect(() => {
        if (!authContext.isAuthenticated){
            router.push('/login');
        }
    }, [authContext.isAuthenticated, router]);
    const loginHandler =()=>{
        const token = 'example-token';
        authContext.login(token);
    }
    const logoutHandler =()=>{
        authContext.logout();
    }
    return (
        <>
            <head>
                <title>پروفایل</title>
                <meta name="description" content="This is the profile page of MyApp."/>
            </head>
            <div>
                {authContext.isAuthenticated ? (
                    <>
                        <p>You are authenticated</p>
                        <button className='btn btn-blue mx-5' onClick={logoutHandler}>logout</button>
                        <button type="button" className="btn-2">Default</button>
                    </>
                ) : (
                    <>
                        <p>You are not authenticated</p>
                        <button className='btn btn-blue' onClick={loginHandler}>login</button>
                    </>
                )}
            </div>
        </>

    );
}