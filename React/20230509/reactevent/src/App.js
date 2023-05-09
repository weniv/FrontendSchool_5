import { useState } from "react";
import Login from './Login';
import Homepage from "./Homepage";
import Modal from "./Modal";


function Hello(props) {
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.

  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.


  return (
    <div>
      {num.map((i) => <h1>안녕, {name} {i}호</h1>)}
    </div>
  )
}



function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234'
  }

  const [login, setLogin] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  function modalClose() {
    setModalShow(false);
  }

  console.log(login);
  return (
    <>
      <Hello name="licat" />
      {login ? <Homepage /> : < Login infoUser={user} setLogin={setLogin} />}
      {modalShow && < Modal modalClose={modalClose}>
        <h2>사용약관에 대해 말씀드리겠습니다.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum laborum, quo facilis eaque quam optio aliquam nam provident. Laboriosam delectus, atque doloremque nam harum molestias ab quisquam! Quis, pariatur.</p>
        <a href="#none">더 보기</a>
      </Modal>}
    </>
  )


}

export default App;