import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import LogIn from "./pages/login"
import SignUp from "./pages/signup";
import Header from "./components/header";
import AdminPage from "./pages/admin";
import TestPage from "./pages/testPage";


function App() {
  
  return (

   <BrowserRouter> {/*page eka wrape kra gni*/}
    <div>
      
        <Routes path="/*">
        
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/admin/*" element={<AdminPage/>} />
          <Route path="/test" element={<TestPage/>} />
          <Route path="/*" element={<h1>404 not found</h1>} />

        </Routes>
      
      
    </div>

   </BrowserRouter>
   


  )
}

export default App
