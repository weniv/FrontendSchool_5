import React from 'react'

export default function MyList() {
    const items = [
        { id: 1, name: "해장국" },
        { id: 2, name: "김치찌개" },
        { id: 3, name: "우육탕" },
    ];

    const itemList = [];

    items.forEach((item) => {
        itemList.push(<li key={item.id} >{item.name}</li>);
    });

    return (
        <ul>
            {itemList}
        </ul>
    )
}
