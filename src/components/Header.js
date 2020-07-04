import React, {Component} from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export const Header = () =>{


    return (
        <header>

            <nav className="navbar navbar-expand-sm">
                <a href={'#'} className={'navbar-brand m-1 logo__app'}><i className="logo m-1 fas fa-clipboard-check"/><strong className={'logo'}>QUIZ</strong>app</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                    {/*<ul className="navbar-nav ">*/}
                    {/*    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>*/}
                    {/*    <li className="nav-item"><a className="nav-link" href="#">Rozpocznij Quiz</a></li>*/}
                    {/*    <li className="nav-item"><a className="nav-link" href="#">Dodaj Quiz</a></li>*/}
                    {/*    <li className="nav-item"><a className="nav-link" href="#">Historia</a></li>*/}
                    {/*    <li className="nav-item"><a className="nav-link" href="#">Kontakt</a></li>*/}


                    {/*</ul>*/}

                    <ul className="navbar-nav ">
                        <li className="nav-item"><Link to={'/'} className="nav-link" href="#">Home</Link></li>
                        <li className="nav-item"><Link to={'/startquiz'} className="nav-link" href="#">Rozpocznij Quiz</Link></li>
                        <li className="nav-item"><Link to={'/addquiz'} className="nav-link" href="#">Dodaj Quiz</Link></li>
                        <li className="nav-item"><Link to={'/history'} className="nav-link" href="#">Historia</Link></li>
                        <li className="nav-item"><Link to={'/contact'} className="nav-link" href="#">Kontakt</Link></li>


                    </ul>
                </div>
            </nav>
        </header>
    )
}