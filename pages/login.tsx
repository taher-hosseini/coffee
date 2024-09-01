import React, {useContext} from 'react';
import {AuthContext} from "@/contexts/AuthContext";


export default function Login() {
    const authContext = useContext(AuthContext);
    const loginHandler =()=>{
        const token = 'example-token';
        authContext?.login(token);
    }
    return (
        <>
            <head>
                <title>ورود</title>
                <meta name="description" content="This is the Login page of MyApp."/>
            </head>
            <div>
                login page
                <button className='btn btn-blue' onClick={loginHandler}>login</button>
            </div>
        </>

    )
        ;
}