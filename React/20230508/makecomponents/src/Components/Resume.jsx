import React, { useState } from 'react'

export default function Resume(props) {
    console.log(useState(0));
    const [like, setLike] = useState(0);
    // let like = 0;
    const [txt, settxt] = useState('hello');

    function clickLike() {
        setLike(like + 1);
        console.log(like);
    }

    return (
        <>
            <h2>{props.name} 자기소개서</h2>
            <strong>{props.hello}</strong>
            <dl>
                <dt>취미 : </dt>
                <dd>{props.hobby}</dd>
                <dt>좋아하는 음식 : </dt>
                <dd>{props.food}</dd>
                <dt>좋아하는 색 : </dt>
                <dd>{props.color}</dd>
            </dl>
            <button onClick={clickLike}>like <span>{like}</span></button>
            Like
        </>
    )
}
