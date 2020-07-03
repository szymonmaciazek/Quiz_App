import React, {Component, useEffect, useState} from "react";
import {QuizResult} from "./QuizResult";

export const StartQuiz = () =>{
    const [question, setQuestion] = useState("")
    const [option1, setOption1] = useState("")
    const [option2, setOption2] = useState("")
    const [option3, setOption3] = useState("")

    const [choice, setChoice] = useState("")
    const [userPoints, setUserPoints] = useState( 0)
    const [currentAnswer, setCurrentAnswer] =useState('')
    const [correctValue, setCorrectValue] = useState('')
    const [quizData, setQuizData] = useState(0)
    const [quizLenght, setQuizLenght]= useState(0)


    const server = "http://localhost:3000";
    const getQuestion = () =>{
        fetch(`${server}/db`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setQuestion(data.items[quizData].question)
                setOption1(data.items[quizData].answers[0])
                setOption2(data.items[quizData].answers[1])
                setOption3(data.items[quizData].answers[2])
                setCorrectValue(data.items[quizData].correct)
                setQuizLenght(data.items.length)

            })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(()=>{
        getQuestion()
    }, [question])

    const getCorrect = (e) =>{
        e.preventDefault()
        // console.log(e.target.value.text);
        setCurrentAnswer(e.target.innerText)
        console.log(e.target.innerText);
        setQuizData(prev => prev + 1)
    }

    useEffect(() =>{
        if(correctValue === currentAnswer){
            setUserPoints(prev => prev + 1)
            console.log("Dobrze");
            console.log(userPoints);
        }else{
            console.log("zle");
        }
    }, [currentAnswer])

    // useEffect(() =>{
    //     setQuizData(prev => prev + 1)
    // }, [quizData])

    const getNextQuestion = () =>{
        fetch(`${server}/db`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setQuestion(data.items[quizData].question)
                setOption1(data.items[quizData].answers[0])
                setOption2(data.items[quizData].answers[1])
                setOption3(data.items[quizData].answers[2])
                setCorrectValue(data.items[quizData].correct)


            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(()=>{
        getNextQuestion()
    }, [quizData])

    if(quizData === quizLenght) return <QuizResult lenght={quizLenght} points={userPoints} />

    return (
        <>
            <div>
                <h1>{question}</h1>
                <div>
                    <button onClick={getCorrect}>{option1}</button>
                    <button onClick={getCorrect}>{option2}</button>
                    <button onClick={getCorrect}>{option3}</button>

                </div>
            </div>
        </>
    )
}