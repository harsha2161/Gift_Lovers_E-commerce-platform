import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import LogIn from "./pages/login"
import SignUp from "./pages/signup";
import AdminPage from "./pages/admin";
import TestPage from "./pages/testPage";
import ForgotPassword from "./pages/forgotPassword";
import { Toaster } from "react-hot-toast";
import TestPage2 from "./pages/testPage2";


function App() {
  
  return (

   <BrowserRouter> {/*page eka wrape kra gni*/}
    <div>
      <Toaster position="top-center"/>
        <Routes path="/*">
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/admin/*" element={<AdminPage/>} />
          <Route path="/forgotPassword" element={<ForgotPassword/>} />
          <Route path="/test" element={<TestPage/>} />
          <Route path="/test2" element={<TestPage2/>} />
          <Route path="/*" element={<h1>404 not found</h1>} />
        </Routes>  
    </div>
   </BrowserRouter>


  )
}

export default App
