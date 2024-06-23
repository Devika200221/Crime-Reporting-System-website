import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Crime from './Crime';
import Login from './Login';
import Admin from './Admin';
import AdminLogin from './AdminLogin';
import AdminRegister from './AdminRegister';
import Navbar from './Navbar';
 import Body from './Body';
import Footer from './Footer';
import Register from './Register';
import Logout from './Logout';
import Crimes from './Crimes';
import CrimeRegistered from './CrimeRegistered';
import SolvedCases from './SolvedCases';




function App() {
  return (
    <BrowserRouter>
      
        <Navbar  />
        
        
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Crime" element={<Crime />} />
            <Route path="Login" element={<Login />} />
            <Route path="Admin" element={<Admin />} />
            <Route path="AdminLogin" element={<AdminLogin />} />
            <Route path="AdminRegister" element={<AdminRegister />} />
            <Route path="CrimeRegistered" element={<CrimeRegistered />} />
            <Route path="Crimes" element={<Crimes />} />
            <Route path="Register" element={<Register />} />
            {/* <Route path="SolvedCases" element={<SolvedCases />} /> */}
            <Route path="Logout" element={<Logout />} />
          </Routes>
          <Body />
        <Footer />
    
    </BrowserRouter>
  );
}

export default App;
