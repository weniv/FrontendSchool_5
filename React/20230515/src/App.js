import logo from './logo.svg';
import './App.css';
import './'
import Com from './TryUseEffect';
import RouteStudy from './RouterSolve/RouteStudy';


// - **Home Page :** /
// - **Product Detail Page** : /products/:id
//     - ex) /products/1 , /products/2, /products/3, /products/4
// - **Product Detail Notice Page :** /products/:id/notice
//     - ex) /products/1/notice , /products/2/notice…
// - **Cart Page :** /cart
// - **Coupon Page :** /users/coupon
// - **Question Page :** /users/question
// - **Notice Page :** /users/notice
// - **User Page :** /users

function App() {
  return (
    <div className="App">
      <RouteStudy/>
    </div>
  );
}

export default App;
