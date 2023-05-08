import React from 'react'
import './MenuListItem.css'

export default function MenuListItem(props) {

    const onItemclick = () => {
        props.onClickEvt(props.mood);
    }

    const getBackgroundColor = () => {
        if (props.isSelected) {
            return 'skyblue'
        }
    }

    return (
        <li>
            <button className='btn-item' onClick={onItemclick} style={{ backgroundColor: getBackgroundColor() }}>기분이 : {props.mood}</button>
        </li>
    )
}
