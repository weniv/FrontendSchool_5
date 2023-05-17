import React from 'react'
import { UserInfo } from './AppConsumer'

export default function HelloLicat() {
    return (
        <UserInfo.Consumer>
            {(value) => {
                console.log(value);
                return <div>{value.id}Hello{value.name}</div>
            }}
        </UserInfo.Consumer>
    )
}
