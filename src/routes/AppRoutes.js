import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import About from "../views/About/About";
import Home from "../views/Home/Home";

export default function AppRoutes(){
    return(
        <Router>
            <Header/>
            <NavBar/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}