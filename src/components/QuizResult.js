import React, {Component, useEffect, useState} from "react";
import {Header} from "./Header";

export const QuizResult = ({points, lenght}) =>{

    return (
        <>
            <Header />
            <h1>{`Zdobyłeś ${points}/${lenght}`}</h1>
        </>
    )
}