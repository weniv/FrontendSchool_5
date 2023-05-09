import React from 'react'
import './Modal.css'

export default function Modal() {
    return (
        <div className='modal-backdrop'>
            <article className='modal'>
                <h2>홈페이지에 오신것을 환영합니다!</h2>
                <p>좋은하루 되세요!</p>
            </article>
        </div>
    )
}
