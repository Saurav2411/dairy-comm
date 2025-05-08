import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from '../src/Components/Navbar/Navbar';
import Home from "../src/Pages/Home/Home";
import Auth from "../src/Pages/Auth/Auth";
import Login from "../src/Pages/Auth/Login/Login";
import Register from "../src/Pages/Auth/Register/Register";
import Error from "../src/Pages/Error/Error";
import AuthCheck from "../src/AuthCheck/AuthCheck";
import Footer from "../src/Components/Footer/Footer";
import About from "../src/Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "../src/Pages/Contact/Contact";

const App = () => {
    return (

        <BrowserRouter>
            {/* navbar  */}
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <AuthCheck>
                        <Home/>
                    </AuthCheck>
                } />
               < Route path="/about" element={<About />} />

               <Route path="/blog" element={<Blog />} />

               <Route path="/contact" element={<Contact />} />

                <Route path="auth" element={<Auth/>}>
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                </Route>

                {/* not found routes  */}
                <Route path="*" element={<Error/> } />
            </Routes>

            {/* footer component  */}
            <Footer />

        </BrowserRouter>

    );
};

export default App;