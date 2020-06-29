import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import {Header} from "./components/Header";

class Test extends Component {
    render() {
        return (
            <>
                <Header />




            </>
        )
    }
}


ReactDOM.render(
    <Test/>,
    document.getElementById('app')
)