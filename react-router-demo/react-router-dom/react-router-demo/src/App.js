import Home from "./Components/Home";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
      </Routes>
    </>
  );
}

export default App;
