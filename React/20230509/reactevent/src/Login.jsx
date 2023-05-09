import { useState } from 'react'

export default function Login({ infoUser, setLogin }) {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        if (id === '') {
            alert('아이디를 입력하지 않았습니다.')
        }
        if (pw === '') {
            alert('패스워드를 입력하지 않았습니다.')
        }
        // alert(`id : ${id}, pw : ${pw}`);
        if (id === infoUser.idUser && pw === infoUser.pwUser) {
            setLogin(true);
        }
    };

    const handleLoginInput = (e) => {
        console.log("id", e.target.value);
        setId(e.target.value)
    };

    const handlePasswordInput = (e) => {
        console.log("pw", e.target.value);
        setPw(e.target.value)
    };

    return (
        <form onSubmit={handleLoginSubmit}>
            <label>
                아이디 : <input type="text" value={id} onChange={handleLoginInput} />
            </label>
            <br />
            <label>
                비밀번호 :
                <input type="password" value={pw} onChange={handlePasswordInput} />
            </label>
            <button type="submit">로그인</button>
        </form>
    );
}