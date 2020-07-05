import React, {Component, useEffect, useState} from "react";
import {Header} from "./Header";

export const Historyy = () => {

    let result = JSON.parse(localStorage.getItem('games'))
    console.log(result);
    if (result === null) {
        return (
            <>
                <Header/>
                <h1>BRAK</h1>
            </>
        )
    }
    return (
        <>
            <Header/>
            <ul>
                {result.map((elem, index) => <li
                    key={index}>Imię:{elem.name} Wynik:{elem.pointsss} / {elem.lenghttt}</li>)}
            </ul>
        </>
    )
}