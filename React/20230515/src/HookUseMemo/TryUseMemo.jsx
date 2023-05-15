import { useState, useMemo } from "react";

function 부하() {
  console.log("값 새로 만드는중");
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  console.log("값 새로 만들기끝");
  return s;
}

function TryUseMemo() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  };

  console.log("랜더링!!");

  const result = useMemo(부하, [countTwo]);

  return (
    <div className="App">
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
    </div>
  );
}
export default TryUseMemo;
