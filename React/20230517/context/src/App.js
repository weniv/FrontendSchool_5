import { createContext } from "react"

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return (
    <HelloLicat />
  );
};

const HelloLicat = () => {

  return (
    <UserInfo.Consumer>
      {(value) => {
        { console.log(value) }
        <div>
          <h2>{value.id}</h2>
          <strong>{value.name}</strong>
          {/* <HelloLicatTwo value={{ name: props.value.name, id: props.value.id }} /> */}
        </div>
      }}
    </UserInfo.Consumer>
  );
};

const HelloLicatTwo = (props) => {
  return (
    <div>
      <h2>Two : {props.value.id}</h2>
      <strong>Two : {props.value.name}</strong>
    </div>
  );
};

export default App;