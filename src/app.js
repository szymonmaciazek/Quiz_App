import React from 'react';
import ReactDOM from 'react-dom';
import {BookList} from "./components/books/BookList";
import './scss/main.scss';


ReactDOM.render(
    <BookList/>,
    document.getElementById('app')
)