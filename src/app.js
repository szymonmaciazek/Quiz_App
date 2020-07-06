import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
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
import {History} from "./components/History";
import {Home} from "./components/Home";


const App = () => {
    return (
        <HashRouter>
            <>
                <Route exact path='/' component={Home}/>
                <Route  path='/startquiz' component={StartQuiz}/>
                <Route  path='/addquiz' component={AddQuiz}/>
                <Route  path='/history' component={History}/>
                <Route  path='/login' component={Login}/>
            </>
        </HashRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)