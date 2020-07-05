import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import {Header} from "./components/Header";

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import {StartQuiz} from "./components/StartQuiz";
import {AddQuiz} from "./components/AddQuiz";
import {Login} from "./components/Login";
import {Historyy} from "./components/Historyy";
import {Home} from "./components/Home";
import {QuizResult} from "./components/QuizResult";


const App = () => {
    return (
        <HashRouter>
            <>
                <Route exact path='/' component={Home}/>
                <Route  path='/startquiz' component={StartQuiz}/>
                <Route  path='/addquiz' component={AddQuiz}/>
                <Route  path='/history' component={Historyy}/>
                <Route  path='/contact' component={Login}/>

            </>
        </HashRouter>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)