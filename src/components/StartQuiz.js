import React, {Component, useEffect, useState} from "react";

export const StartQuiz = () =>{
    const [question, setQuestion] = useState("")
    const [option1, setOption1] = useState({
        text: "",
        valid: ""
    })
    const [option2, setOption2] = useState({
        text: "",
        valid: ""
    })
    const [option3, setOption3] = useState({
        text: "",
        valid: ""
    })
    const [choice, setChoice] = useState("")
    const [userPoints, setUserPoints] = useState( 0)
    const [currentAnswer, setCurrentAnswer] =useState('')


    const server = "http://localhost:3000";
    const getQuestion = () =>{
        fetch(`${server}/db`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data.items[0].question);
                setQuestion(data.items[0].question)
                // setOption1(data.items[0].answers[0].text)
                // setOption2(data.items[0].answers[1].text)
                // setOption3(data.items[0].answers[2].text)
                const value1 = {
                    text : data.items[0].answers[0].text,
                    valid : data.items[0].answers[0].correct
                }
                setOption1(value1)

                const value2 = {
                    text : data.items[0].answers[1].text,
                    valid : data.items[0].answers[1].correct
                }
                setOption2(value2)

                const value3 = {
                    text : data.items[0].answers[2].text,
                    valid : data.items[0].answers[2].correct
                }
                setOption3(value3)
            })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(()=>{
        getQuestion()
    }, [question])

    const getCorrect = (e) =>{
        // console.log(e.target.value.text);
        setCurrentAnswer(e.target.value)
    }
    return (
        <>
            <div>
                <h1>{question}</h1>
                <div>
                    <div onClick={getCorrect}>{option1.text}</div>
                    <div>{option2.text}</div>
                    <div>{option3.text}</div>
                </div>
            </div>
        </>
    )
}