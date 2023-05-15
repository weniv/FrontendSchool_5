import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
  useParams,
} from "react-router-dom";
// - **Home Page :** /
// - **Product Detail Page** : /products/:id
//     - ex) /products/1 , /products/2, /products/3, /products/4
// - **Product Detail Notice Page :** /products/:id/notice
//     - ex) /products/1/notice , /products/2/notice…
// - **Cart Page :** /cart
// - **User Page :** /users
// - **Coupon Page :** /users/coupon
// - **Question Page :** /users/question
// - **Notice Page :** /users/notice

function RouteSolve() {
  const productIds = [1, 2, 3, 4, 5];
  return (
    <BrowserRouter>
      <h1>퀴즈</h1>
      <Link to="/">홈페이지</Link>
      {productIds.map((productId) => (
        <Link to={`/products/${productId}`}>상품{productId}</Link>
      ))}
      <Link to="/users">Users</Link>
      <Link to="/cart">Cart</Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/products/:id/notice" element={<ProductNotice />} />
        <Route path="/cart" element={<Cart name="licat" />} />
        <Route path="/users/" element={<Users />}>
          <Route path="coupon" element={<div>쿠폰</div>} />
          <Route path="question" element={<div>퀘스션</div>} />
          <Route path="notice" element={<div>노티스</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return <h1>홈페이지</h1>;
}

function Cart({ name }) {
  return <h1>{name} world1 여기는 /cart 입니다.</h1>;
}

function Users() {
  return (
    <div>
      <Link to="/users/coupon">usersCoupon</Link>
      <br />
      <Link to="/users/notice">Notice</Link>
      <br />
      <Link to="/users/question">Question</Link>
      <br />
      <h1>여기는 Users</h1>
      <Outlet />
    </div>
  );
}

function Three() {
  return <h1>hello world3</h1>;
}

function Products() {
  const { id } = useParams();
  return (
    <div>
      <h1>hello Products {id}</h1>
      <Link to="./notice">Notice</Link>
    </div>
  );
}
function ProductNotice() {
  const pram = useParams();
  console.log(pram);
  return <h1>hello Products {pram.id} Notice </h1>;
}

function HojunIndex() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Hojun index</h1>;
}

function HojunOne() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Hojun 1</h1>;
}

function HojunTwo() {
  const location = useLocation();
  console.log(location);
  return <h1>hello Hojun 2</h1>;
}

export default RouteSolve;
