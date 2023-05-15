import logo from './logo.svg';
import './App.css';
import './'
import RouteStudy from './RouterSolve/RouteStudy';
import RouteSolve from './RouterSolve/RouteSolve';
import Counter from './HookUseEffect/TryUseEffect';
import Time from './HookUseEffect/Quiz2';
import Counter2 from './HookUesRef/TryUseRef';
import TryUseRefDom from './HookUesRef/TryUseRefDom';
import TryUseMemo from './HookUseMemo/TryUseMemo';




function App() {
  return (
    <div className="App">
      {/* <RouteStudy/> */}
      {/* <RouteSolve/> */}
      {/* <Counter/> */}
      {/* <Time/> */}
      {/* <Counter2/> */}
      {/* <TryUseRefDom/> */}
      <TryUseMemo/>
    </div>
  );
}

export default App;
