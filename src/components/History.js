import React, {Component, useEffect, useState} from "react";
import {Header} from "./Header";

export const History = () => {

    let result = JSON.parse(localStorage.getItem('games'))
    console.log(result);
    if (result === null) {
        return (
            <>
                <Header/>

                <h2 className={'h1 p-1 text-center'}>Historia wyników</h2>
                <div id={'login-container'} className={'d-flex flex-column text-center col-md-8 col-12 shadow'}>
                    <h3 className={'h3'}>Zapisz wynik, aby był widoczny w historii</h3>
                </div>
            </>
        )
    }
    return (
        <>
            <Header/>

            <h2 className={'h1 p-1 text-center'}>Historia wyników</h2>
            <div id={'login-container'} className={'d-flex flex-column  text-center col-md-8 col-12 shadow'}>
                <ul className={'list-group col-md-7 col-12 m-auto flex-column-reverse'}>
                    {result.map((elem, index) => <li className={'list-group-item shadow m-1 history-list'}
                        key={index}>Imię: {elem.name} Punkty: {elem.pointsss} / {elem.lenghttt}</li>)}
                </ul>
            </div>
        </>
    )
}