import React, {useEffect} from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Aos from "aos";

const App = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <>
            <Navbar/>
            <Home />
            <Main />
            <Footer />
        </>
    )
}

export default App;