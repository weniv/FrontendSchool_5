import Hello from './Components/Hello'
import Time from './Components/Time'


function HelloProps(props) {
  console.log(props);
  return (
    <div>
      <p>my name is {props.name} and age is {props.age}</p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  )
}


function App() {
  return (
    <div>
      <Hello name="Gary" />
      <Time />
      <HelloProps
        name="jaehyun"
        age={25}
        someFunc={() => 'awesome!!!'}
        someJSX={<img src="https://picsum.photos/id/237/200/300" />}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }} />
    </div>
  );
}

export default App;