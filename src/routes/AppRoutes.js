import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../views/Home/Home";

export default function AppRoutes(){
    return(
        <Router>
            <Header/>
            <Routes>
                <Route index element={<Home/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}