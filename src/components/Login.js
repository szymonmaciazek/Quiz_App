import React, {Component, useEffect, useState} from "react";
import {Header} from "./Header";

export const Login = () =>{
    const [userName, setUserName] = useState('Imię')

    const handleSetUserName = (e) => {
        setUserName(e.target.value)
    }

    const storage = () =>{
        localStorage.setItem('userLogin', userName)
    }

    useEffect(() =>{
        storage()
    }, [userName])

    storage()

    return (
        <>
            <Header />

            <h2 className={'h1 p-1 text-center'}>Podaj swoje imię</h2>
            <div id={'login-container'} className={'d-flex flex-column text-center col-md-8 col-12 shadow'}>
                <label>Podaj imię<input id={'name'} className={'col-12 col-md-8 m-auto form-control add-input text-center'} onChange={handleSetUserName}  name="name" type="text"/></label>

            </div>
        </>
    )
}