import './App.css';
import Menu from './components/menu/Menu'
import NewMenu from './components/newMenu/NewMenu'


function App() {
  return (
    <div>
      <NewMenu />
      <Menu />
      <h1 hello="hi" >안녕 라이캣!!</h1>
      <h1 style={{}}>안녕 라이캣 2호!!</h1>
    </div>
  );
}

export default App;
