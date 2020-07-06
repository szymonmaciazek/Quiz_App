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
            <h1>{`Zdobyłeś ${points}/${length}`}</h1>
            <button disabled={disabledButton} onClick={handleSave}>Zapisz</button>
        </>
    )
}