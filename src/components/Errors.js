import React, {Component, useEffect, useState} from "react";

export const Errors = (bug) =>{
    return(
        <ul>
            {bug.map((element, index) => <li key={index}>{element}</li>)}
        </ul>
    )
}