import React from 'react'
import './EventForm.css'
import { useState } from 'react'


export default function EventForm({ addData }) {


    function resetForm() {
        setTitle('');
        setDate('');
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = {
            id: Math.floor(Math.random() * 10000),
            title: title,
            date: date,
        }

        console.log(formData);


        addData(formData);
    }


    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');


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
            <button type='submit'>제출하기</button>
            <button type='reset' onClick={resetForm}>초기화</button>
        </form>
    )
}
