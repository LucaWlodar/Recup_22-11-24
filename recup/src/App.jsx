import { BrowserRouter, Routes, Route } from "react-router-dom";
import The_Products from "./components/The_Products";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<The_Products/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App