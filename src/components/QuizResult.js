import React, {Component, useEffect, useState} from "react";
import {Header} from "./Header";

const games = []

export const QuizResult = ({points, length}) =>{
    const [disabledButton, setDisabledButton] = useState(false)

    const save = () => {

        const game = {
            pointsss: points,
            lenghttt: length,
            name: localStorage.getItem('userLogin')
        }
        localStorage.setItem("game", JSON.stringify(game));

        games.push(game);
        localStorage.setItem("games", JSON.stringify(games));

    }

    const handleSave = () =>{
        save()
        setDisabledButton(true)
    }

    return (
        <>
            <Header />

            <div id={'login-container'} className={'d-flex flex-column text-center col-md-8 col-12 shadow'}>


            <h1>{`Zdobyłeś ${points}/${length} punktów`}</h1>
            <button disabled={disabledButton} className={'mb-2 btn button align-self-center shadow'} onClick={handleSave}>Zapisz wynik</button>

            </div>
        </>
    )
}