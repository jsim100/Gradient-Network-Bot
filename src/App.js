import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";               



const App = () => {
  
  return (
  <>
  <Router>
    <Header/>
    <Routes>  
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>    
    
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/offers" element={<Offers/>}/>
      <Route path="/sign-up" element={<SignUp />}/>
      <Route path="/sign-in" element={<SignIn/>}/>
    </Routes>
  </Router>
  </>
  )

};

export default App;
