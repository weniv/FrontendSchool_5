import { useState } from "react";
import Login from './Login';
import Homepage from "./Homepage";
import Modal from "./Modal";

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234'
  }

  const [login, setLogin] = useState(false);

  console.log(login);
  return (
    <>
      login ? <Homepage /> : < Login infoUser={user} setLogin={setLogin} />
      < Modal />
    </>
  )


}

export default App;