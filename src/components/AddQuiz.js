import React, {Component, useEffect, useState} from "react";
import {Header} from "./Header";


export const AddQuiz = () =>{

    const [warning, setWarning] = useState([])
    const [newQuestion, setNewQuestion] = useState("")
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
        if(questionObject.answers[0].length<=0){newErrors.push("Odpowiedź 1 musi zawierać minimum 1 znak")}
        if(questionObject.answers[1].length<=0){newErrors.push("Odpowiedź 2 musi zawierać minimum 1 znak")}
        if(questionObject.answers[2].length<=0){newErrors.push("Odpowiedź 3 musi zawierać minimum 1 znak")}
        if(questionObject.correct.length<=0){newErrors.push("Wybierz poprawną odpowiedź")}
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

            <h2 className={'text-center p-1 h1'}>Dodaj pytanie</h2>
            <form onSubmit={sendForm} className={'d-flex justify-content-center form-group container'}>
                <div id={'label-container'} className={'d-flex flex-column text-center shadow'}>
                <label>Treść pytania<input id={'pytanie'} className={'col-12 col-md-8 form-control add-input text-center'} value={newQuestion} name="question" type="text" onChange={handleQuestionData}/></label>
                <label>Treść odpowiedzi 1<input id={'input'} className={'col-12 col-md-8 form-control add-input'} value={newAnswer1} name="answer" type="text" onChange={handleAnswerData1}/></label>
                <label>Treść odpowiedzi 2<input id={'input'} className={'col-12 col-md-8  form-control add-input'} value={newAnswer2} name="answer" type="text" onChange={handleAnswerData2}/></label>
                <label>Treść odpowiedzi 3<input id={'input'} className={'col-12 col-md-8 form-control add-input'} value={newAnswer3} name="answer" type="text" onChange={handleAnswerData3}/></label>
                <label>Poprawna odpowiedz<select id={'input'} className={'col-12 col-md-8 form-control add-input'} name="correct" onChange={handleCorrectData}>
                        <option />
                        <option>{newAnswer1}</option>
                        <option>{newAnswer2}</option>
                        <option>{newAnswer3}</option>
                </select></label>

                <button className={'mb-2 btn button align-self-center shadow'}>Dodaj</button>
                    {warning.length > 0 && <ul className={'p-1'}> {warning.map( (err, index) => <li id={'warning'} className=" container list-group-item list-group-item-warning " key={index}>
                        <i className="fas fa-exclamation" />  {err}</li>)} </ul>}
                </div>
            </form>

        </>
    )
}
