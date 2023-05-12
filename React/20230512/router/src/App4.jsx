import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Link to="/"> home </Link>
            <Link to="/one"> one </Link>
            <Link to="/two"> two </Link>
            <Link to="/three"> three </Link>
            <Link to="/three/hojunone/"> hojunone </Link>
            <Link to="/three/hojuntwo/"> hojuntwo </Link>
            {/* 라우트를 감싸줍니다. */}
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/one" element={<One name='licat' />} />
                <Route path="/two" element={<Two />} />
                <Route path="/three/*" element={<Outlet />}>
                    <Route path="" element={<HojunIndex />} />
                    <Route path="hojunone/" element={<HojunOne />} />
                    <Route path="hojuntwo/" element={<HojunTwo />} />
                </Route>
                <Route path="/blog/:id" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    );
}

function Index() {
    return <h1>hello world0</h1>
}

function One({ name }) {
    return <h1>{name} world1</h1>
}

function Two() {
    return <h1>hello world2</h1>
}

function Three() {
    return <h1>hello world3</h1>
}

function Blog() {
    const location = useLocation();
    console.log(location)
    return <h1>hello Blog</h1>
}

function HojunIndex() {
    const location = useLocation();
    console.log(location)
    return <h1>hello Hojun index</h1>
}

function HojunOne() {
    const location = useLocation();
    console.log(location)
    return <h1>hello Hojun 1</h1>
}

function HojunTwo() {
    const location = useLocation();
    console.log(location)
    return <h1>hello Hojun 2</h1>
}

export default App;