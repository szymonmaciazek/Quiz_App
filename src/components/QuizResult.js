import React, {Component, useEffect, useState} from "react";
import {Header} from "./Header";



// localStorage.setItem('points', points)
// localStorage.setItem('lenght', lenght)
// localStorage.setItem("historyArray", JSON.stringify(historyArray[historyArray.length + 1]));


const games = []


export const QuizResult = ({points, lenght}) =>{
    const [disabled, setDisabled] = useState(false)

    const save = () => {

        const game = {
            pointsss: points,
            lenghttt: lenght,
            name: localStorage.getItem('userLogin')
        }
        localStorage.setItem("game", JSON.stringify(game));

        games.push(game);
        localStorage.setItem("games", JSON.stringify(games));

    }

    const handleSave = () =>{
        save()
        setDisabled(true)
    }


    return (
        <>
            <Header />
            <h1>{`Zdobyłeś ${points}/${lenght}`}</h1>
            <button disabled={disabled} onClick={handleSave}>Zapisz</button>
        </>
    )
}