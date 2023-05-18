import React from 'react'
import ImageItem from './ImageItem'

export default function ImageList({ imageList }) {
    console.log(imageList);
    return (
        <ul>
            {imageList.map((item) => {
                return (
                    <li key={item.id}>
                        <ImageItem img={item} />
                    </li>
                )
            })}
        </ul>
    )
}
