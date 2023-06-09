import React from 'react'
import iconEdit from '../../img/icon-edit.svg'
import iconDelete from '../../img/icon-delete.svg'
import styles from './Home.module.css'
import { useFirestore } from '../../hooks/useFirestore';

export default function DiaryList({ diaries }) {

    function formattingTime(seconds) {
        const date = new Date(seconds * 1000);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const dayName = days[date.getDay()];

        return `${year}.${month}.${day}.${dayName}`
    }

    const { deleteDocument } = useFirestore("secretDiary");

    return (
        diaries.map((item) => {
            console.log(item);
            return (
                < li key={item.id}>
                    <article className={styles["diary-article"]}>
                        <h3 className={styles["article-title"]}>{item.title}</h3>
                        <time className={styles["article-time"]} dateTime={formattingTime(item.createTime.seconds).replaceAll('.', '-').slice(0, -4)}>{formattingTime(item.createTime.seconds)}</time>
                        <p className={styles["article-content"]}>{item.text}</p>

                        <div className={styles["button-group"]}>
                            <button type="button">
                                <img src={iconEdit} alt="수정" />
                            </button>
                            <span></span>
                            <button type="button" onClick={() => deleteDocument(item.id)}>
                                <img src={iconDelete} alt="삭제" />
                            </button>
                        </div>
                    </article>
                </li >
            )
        })

    )
}
