import React from 'react'
import styles from './Home.module.css'
import DiaryForm from './DiaryForm'
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import DiaryList from './DiaryList';

export default function Home() {

    const date = new Date();
    const year = date.getFullYear();
    // padStart : 현재 문자열의 시작을 다른 문자열로 채워주는 역할을 합니다.
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const result = `${year}.${month}.${day}`;
    const { user } = useAuthContext();
    const { documents, error } = useCollection('secretDiary');

    return (
        <div className={styles.container}>
            <main className={styles["diary-main"]}>
                <h2 className={styles.heart}>{result}의 비밀일기</h2>
                <DiaryForm uid={user.uid} />
            </main>
            <section>
                <h2 className="a11y-hidden">일기 목록</h2>
                <ul>
                    {error && <strong>error</strong>}
                    {documents && <DiaryList diaries={documents} />}
                </ul>
            </section>
        </div>
    )
}
