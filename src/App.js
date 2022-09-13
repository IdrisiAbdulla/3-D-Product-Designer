import Register from "./components/Register";
import Login from "./components/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductCustomizer from "./components/ProductCustomizer";

function App() {
  return (
    
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route element={<Register />} path="/Register" />
        <Route element={<Login/>} path="/login" />
        <Route element={<Home/>} path="/Home" />
        <Route element={<ProductCustomizer/>} path="/ProductCustomizer" />
        <Route element={<Home/>} path="*" />
      </Routes>
    

      </BrowserRouter>
      
  );
}

export default App;
