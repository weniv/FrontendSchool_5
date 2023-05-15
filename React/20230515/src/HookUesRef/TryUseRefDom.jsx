import React, { useState, useRef } from "react";

const TryUseRefDom = () => {
  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값
  // const a = ''
  // const b = ''

  const inputCheck = (e) => {
    e.preventDefault();
    console.log(document.querySelectorAll("input"));
    setEmailValue(document.querySelectorAll("input")[0].value);
    setPwValue(document.querySelectorAll("input")[1].value);
    // setEmailValue(emailInput.current.value)
    // setPwValue(pwInput.current.value)
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" />
        {/* 이메일 : <input type="email" ref={a} /> */}
        {/* 이메일 : <input type="email" ref={emailValue}/> */}
      </label>
      <label>
        비밀번호 : <input type="password" />
        {/* 비밀번호 : <input type="password" ref={b} /> */}
        {/* 비밀번호 : <input type="password" ref={pwValue} /> */}
      </label>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
        로그인
      </button>
      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>
    </form>
  );
};

export default TryUseRefDom;
