import React, {Component, useEffect, useState} from "react";

export const QuizResult = ({points, lenght}) =>{

    return (
        <>
            <h1>{`Zdobyłeś ${points}/${lenght}`}</h1>
        </>
    )
}