import React, {Component} from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export const Header = ({userName}) =>{

    return (
        <header>

            <nav className="navbar navbar-expand-sm shadow">
                <div className={'container'}>
                    <a href={'#'}  className={'navbar-brand m-1 logo__app'}>
                        <i id={'check'} className="logo m-1 fas fa-clipboard-check shadow"/><strong className={'logo'}>QUIZ</strong>app</a>
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarText">

                        <ul className="navbar-nav list-group">
                            <li  className="nav-item list-group-item navigation "><Link to={'/'} className="nav-link" href="#">Home</Link></li>
                            <li className="nav-item list-group-item navigation"><Link to={'/startquiz'} className="nav-link" href="#">Rozpocznij
                                Quiz</Link></li>
                            <li className="nav-item list-group-item navigation"><Link to={'/addquiz'} className="nav-link" href="#">Dodaj
                                Quiz</Link></li>
                            <li className="nav-item list-group-item navigation"><Link to={'/history'} className="nav-link" href="#">Historia</Link>
                            </li>
                            <li className="nav-item list-group-item navigation"><Link to={'/login'} className="nav-link" href="#"><span id="test1" className="app__user-name">{localStorage.getItem('userLogin')}</span>
                                <i className=" app__user-avatar far fa-user-circle" /></Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}