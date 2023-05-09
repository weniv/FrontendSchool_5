import { useState } from "react";
import Login from './Login';
import Homepage from "./Homepage";

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234'
  }

  const [login, setLogin] = useState(false);

  console.log(login);
  return (
    login ? <Homepage /> : < Login infoUser={user} setLogin={setLogin} />
  )
}

export default App;