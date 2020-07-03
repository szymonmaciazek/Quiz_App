import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import {Header} from "./components/Header";
import {StartQuiz} from "./components/StartQuiz";


const App = () => {
    return (
        <>
            <Header/>
            <StartQuiz />

        </>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)