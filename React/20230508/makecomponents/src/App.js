
function Licat(props) {
  const name = '라이캣!';
  const someStyle = { backgroundColor: "black", color: "white" };

  return (
    <div>
      <h1 style={someStyle}>안녕, {name} 1호</h1>
      <h1>안녕, 라이캣 2호!</h1>
      <div className="newClass" />
    </div>
  )
}

function Time() {

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <h1 style={{ color: 'red' }}>년 : {year}</h1>
      <h1>월/일 : {month}/{date}</h1>
      <h1>시간 : {hour}시 {min}분 {sec}초</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <Licat name="Gary" />
      <Time />
    </div>
  );
}

export default App;