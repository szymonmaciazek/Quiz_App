import React, {Component, useEffect, useState} from "react";
import {Header} from "./Header";
import {Link} from "react-router-dom";

export const Home = () =>{

    return (
        <>
            <Header/>

                <div id={'home-container'} className={'d-flex flex-column text-center col-12 shadow'}>

                    <div>
                        <h2>Witaj w <a href={'#'} className={' navbar-brand m-1 logo__app'}>
                            <i id={'check'} className="logo m-1 fas fa-clipboard-check"/>
                            <strong className={'logo'}>QUIZ</strong>app
                        </a></h2>
                        <strong className={'m-2'}>Version 1.0.0</strong>
                        <ul className={'list-group col-md-7 col-12 m-auto'}>
                            <li className={'list-group-item mb-2 shadow'}><small>Dodano możliwość rozwiązywania quizu</small></li>
                            <li className={'list-group-item shadow'}><small>Dodano możliwość tworzenia pytań</small></li>
                        </ul>
                    </div>
                    <Link to={'/startquiz'} className={'mb-2 btn button align-self-center shadow'} href="#">Rozpocznij
                        Quiz</Link>
                </div>
        </>
    )
}

// className={'mb-2 btn button align-self-center'}