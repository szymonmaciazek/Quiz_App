import React, {Component, useEffect, useState} from "react";
import {QuizResult} from "./QuizResult";
import {Header} from "./Header";

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
    const [subject, setSubject] = useState(1)
    const [answers, setAnswers] = useState([])


    const server = "http://localhost:3000";
    const getQuestion = () =>{
        fetch(`${server}/db`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setQuestion(data.items[quizData].question)
                setAnswers(data.items[quizData].answers)
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
        setCurrentAnswer(e.target.innerText)
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

    const getNextQuestion = () =>{
        fetch(`${server}/db`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setQuestion(data.items[quizData].question)
                setAnswers(data.items[quizData].answers)

                setCorrectValue(data.items[quizData].correct)


            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(()=>{
        getNextQuestion()
    }, [quizData])

    if(quizData === quizLenght) return <QuizResult lenght={quizLenght} points={userPoints - 1} />

    return (
        <>
            <Header />
            <div>
                <h1>{question}</h1>
                <div>
                    <ul>
                        {answers.map((element,index) => <li onClick={getCorrect} key={index}>{element}</li>)}
                    </ul>

                </div>
            </div>
        </>
    )
}