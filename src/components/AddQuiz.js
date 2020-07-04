import React, {Component, useEffect, useState} from "react";
import {Header} from "./Header";
import {Errors} from "./Errors";


export const AddQuiz = () =>{

    const [warning, setWarning] = useState([])
    const [newQuestion, setNewQuestion] = useState("")
    const [newAnswers, setNewAnswers] = useState([])
    const [newAnswer1, setNewAnswer1] = useState('')
    const [newAnswer2, setNewAnswer2] = useState('')
    const [newAnswer3, setNewAnswer3] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [questionObject, setQuestionObject] = useState({
        "question": "",
        "subject_ID": 1,
        "answers": [],
        "correct": ""
    })

    const addQuestion = () =>{

        const quest =
            {
                    "question": newQuestion,
                    "subject_ID": 1,
                    "answers": [newAnswer1, newAnswer2, newAnswer3],
                    "correct": correctAnswer
            }
        console.log(quest);
        setQuestionObject(quest)
    }

    useEffect(() =>{
        addQuestion()
    }, [newQuestion, newAnswer3, newAnswer2, newAnswer1, correctAnswer])

    const handleQuestionData = (e) => {
        setNewQuestion(e.target.value)
    }

    const handleAnswerData1 = (e) => {
        setNewAnswer1(e.target.value)
    }

    const handleAnswerData2 = (e) => {
        setNewAnswer2(e.target.value)
    }

    const handleAnswerData3 = (e) => {
        setNewAnswer3(e.target.value)
    }

    const handleCorrectData = (e) => {
        setCorrectAnswer(e.target.value)
    }

    const sendForm = (e) => {
        e.preventDefault()

        const newErrors = [];
        if(questionObject.question.length<3){newErrors.push("Pytanie musi zawierać minimum 3 znaki")}
        if(questionObject.answers[0].length<=0){newErrors.push("Odpowiedź musi zawierać minimum 1")}
        if(questionObject.answers[1].length<=0){newErrors.push("Odpowiedź musi zawierać minimum 1")}
        if(questionObject.answers[2].length<=0){newErrors.push("Odpowiedź musi zawierać minimum 1")}
        if(questionObject.correct.length<=0){newErrors.push("Poprawna odpowiedź musi zawierać minimum 1")}
        setWarning(newErrors)
        if(newErrors.length>0)return false


        console.log(newErrors);


        fetch(`http://localhost:3000/items`, {
            method: "POST",
            body: JSON.stringify(questionObject),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });


        resetForm()
    }

    const resetForm = () =>{
        setNewQuestion('')
        setNewAnswer1('')
        setNewAnswer2('')
        setNewAnswer3('')
        setCorrectAnswer('')
    }

    return (
        <>

            <Header />

            <h1>DODAJ QUIZ</h1>
            <form onSubmit={sendForm}>
                <label>Treść pytania<input id={'pytanie'} value={newQuestion} name="question" type="text" onChange={handleQuestionData}/></label>
                <label>Treść odpowiedzi 1<input value={newAnswer1} name="answer" type="text" onChange={handleAnswerData1}/></label>
                <label>Treść odpowiedzi 2<input value={newAnswer2} name="answer" type="text" onChange={handleAnswerData2}/></label>
                <label>Treść odpowiedzi 3<input value={newAnswer3} name="answer" type="text" onChange={handleAnswerData3}/></label>
                <label>Poprawna odpowiedz<input value={correctAnswer} name="correct" type="text" onChange={handleCorrectData}/></label>

                <button>Zatwierdz</button>
            </form>
            {warning.length > 0 && <ul> {warning.map( (err, index) => <li key={index}>{err}</li>)} </ul>}
        </>
    )
}
