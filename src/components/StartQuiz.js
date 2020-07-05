import React, {Component, useEffect, useState} from "react";
import {QuizResult} from "./QuizResult";
import {Header} from "./Header";

const games = []

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
    const [answers, setAnswers] = useState([])
    const [isDone, setIsDone] = useState(false)



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

    //
    // const save = () => {
    //
    //     const game = {
    //         points: userPoints,
    //         lenght: quizLenght
    //     }
    //     localStorage.setItem("game", JSON.stringify(game));
    //
    //     games.push(game);
    //     localStorage.setItem("games", JSON.stringify(games));
    //
    // }
    //
    //
    // // useEffect(()=>{
    // //     save()
    // // },[])
    //
    // // if(quizData === quizLenght) { setIsDone(true)}
    if(quizData === quizLenght) {
        return <QuizResult lenght={quizLenght} points={userPoints - 1}/>
    }
    return (
        <>
            <Header />
            <div>
                <h1 className={'h2 text-center p-3 col-12'}>{question}</h1>
                <div id={'label-container'} className={'d-flex flex-column text-center m-auto col-md-8 col-12 shadow'}>
                    <ul className={'list-unstyled list-group'}>
                        {answers.map((element,index) => <li className={' h4 list-group-item list-group-item-action'} onClick={getCorrect} key={index}>{element}</li>)}
                    </ul>

                </div>
            </div>
        </>
    )
}