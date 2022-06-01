import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinsTable from "../components/CoinsTable/CoinsTable";
import DetailCoin from "../components/DetailCoin/DetailCoin";
import Footer from "../components/Footer/Footer";
import ContactForm from "../views/Contact/ContactForm";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import About from "../views/About/About";
import Home from "../views/Home/Home";
import NotFound from "../views/NotFound/NotFound";

export default function AppRoutes(){
    return(
        <Router>
            <Header/>
            <NavBar/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/coins' element={<CoinsTable/>}/>
                <Route path='/coins/:coinID' element={<DetailCoin/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<ContactForm/>}/>
                <Route path='*' element={<NotFound />} />

            </Routes>
            <Footer/>
        </Router>
    )
}