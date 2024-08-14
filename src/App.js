import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import SignUp from "./pages/SignUp";


const App = () => {
  
  return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>    
      <Route path="/sign-in" element={<SignIn/>}/> 
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/offers" element={<Offers/>}/>
      <Route path="/sign-up" element={<SignUp />}/>
    </Routes>
  </Router>
  </>
  )

};

export default App;
