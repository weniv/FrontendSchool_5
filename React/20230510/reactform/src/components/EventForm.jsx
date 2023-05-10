import React from 'react'
import './EventForm.css'
import { useState } from 'react'


export default function EventForm({ addData }) {


    function resetForm() {
        setTitle('');
        setDate('');
        setFood('짜장면');
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            id: Math.floor(Math.random() * 10000),
            title: title,
            date: date,
            food: food
        }

        addData(formData);
        resetForm();
    }


    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [food, setFood] = useState('짜장면');


    return (
        <form className='event-form' onSubmit={handleSubmit}>
            <label>
                <strong>Event Title : </strong>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            </label>
            <label>
                <strong>Event date : </strong>
                <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
            </label>
            <label>
                <select value={food} onChange={(event) => { setFood(event.target.value) }}>
                    <option value="짜장면">짜장면</option>
                    <option value="유산슬">유산슬</option>
                    <option value="탕수육">탕수육</option>
                </select>
            </label>

            <button type='submit'>제출하기</button>
            <button type='reset' onClick={resetForm}>초기화</button>
        </form>
    )
}
