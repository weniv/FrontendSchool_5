import { useState } from "react";
import EventForm from "./components/EventForm";
import ItemGenerator from "./components/ItemGenerator";

function App() {

  const [datas, setDatas] = useState({});

  const addData = (data) => {
    setDatas([...datas, data]);
  }


  return (
    <div>
      <ItemGenerator />
      <EventForm addData={addData} />
    </div>
  );
}
export default App;
