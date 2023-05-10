import React from 'react'
import './EventForm.css'

export default function EventForm() {
    return (
        <form className='event-form'>
            <label>
                <strong>Event Title : </strong>
                <input type="text" />
            </label>
            <label>
                <strong>Event date : </strong>
                <input type="date" />
            </label>
            <button type='submit'>제출하기</button>
            <button type='reset'>초기화</button>
        </form>
    )
}
