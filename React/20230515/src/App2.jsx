import React, { useMemo, useRef, useState } from 'react'

export default function App() {
    // const inputName = useRef(null)
    // const inputId = useRef(null)
    const [userInfo, setUserInfo] = useState([])
    const [name, setName] = useState('')
    const [id, setId] = useState('')

    function handleInputName(e) {
        console.log(e)
        setName(e.target.value)
        console.log('렌더링 - 1')
    }

    function handleInputId(e) {
        console.log(e)
        setId(e.target.value)
        console.log('렌더링 - 2')
    }

    function handleSubmit(e) {
        console.log(e);
        e.preventDefault()
        const newInfo = [...userInfo, { name, id }]
        // inputName.current.value = ''
        // inputId.current.value = ''
        setId('');
        setName('');
        e.target[0].focus();
        // inputName.current.focus()
        setUserInfo(newInfo)
        console.log('렌더링 - 3')
    }

    // 모든 렌더링에 함께 렌더링되는 이슈가 있습니다.
    function getNum(li) {
        console.log('렌더링!')
        return li.length
    }

    const num = useMemo(() => {
        return getNum(userInfo);
    }, [userInfo]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* <form> */}
                <input
                    type='text'
                    placeholder='이름을 입력하세요'
                    onChange={handleInputName}
                    value={name}
                // ref={inputName}
                />
                <input
                    type='text'
                    placeholder='아이디를 입력하세요'
                    onChange={handleInputId}
                    value={id}
                // ref={inputId}
                />
                {/* <button type='submit' onClick={handleSubmit}>회원 명부 작성</button> */}
                <button type='submit'>회원 명부 작성</button>
            </form>
            <ul>
                {
                    userInfo.map((value, index) => (
                        <li key={index}>
                            <h3>이름 : {value.name}</h3>
                            <strong>아이디 : {value.id}</strong>
                        </li>
                    ))
                }
            </ul>
            <span>현재 회원 수 : {num}</span>
        </>
    )
}