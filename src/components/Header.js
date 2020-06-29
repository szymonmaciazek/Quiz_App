import React from 'react';

export const Header = () =>{


    return (
        <header>

            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a href={'#'} className={'navbar-brand m-1 logo__app'}><i className="logo m-1 fas fa-clipboard-check"/><strong className={'logo'}>QUIZ</strong>app</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                    <ul className="navbar-nav ">
                        <li className="nav-item"><a className="nav-link" href="#">Rozpocznij Quiz</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Dodaj Quiz</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Historia</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Kontakt</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}