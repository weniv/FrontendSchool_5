import { useState } from "react";
import EventForm from "./components/EventForm";
import ItemGenerator from "./components/ItemGenerator";

function App() {

  const [datas, setDatas] = useState([]);

  // datas 배열에 데이터를 추가하는 목적을 가지는 함수입니다.
  const addData = (data) => {
    setDatas([...datas, data]);
  }

  console.log(datas);

  return (
    <div>
      <ItemGenerator datas={datas} />
      <EventForm addData={addData} />
    </div>
  );
}
export default App;
