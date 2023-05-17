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
        return <div>
          <h2>{value.id}</h2>
          <strong>{value.name}</strong>
          <HelloLicatTwo />
        </div>
      }}
    </UserInfo.Consumer>
  );
};

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return <div>
          <h2>Two : {value.id}</h2>
          <strong>Two : {value.name}</strong>
        </div>
      }}
    </UserInfo.Consumer>
  );
};

export default App;