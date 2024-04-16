import { Route, Routes, BrowserRouter} from "react-router-dom"

//componentes
import Home from "../pages/Home/home"
import About from "../pages/About/about"
import Contact from "../pages/ContactUs/contact"
import Cart from "../pages/Cart/cart"
import Login from "../pages/Login/login"

const Router = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route Component = { Home } exact path="/" />
            <Route Component = { About } path="/about" />
            <Route Component = { Contact } path="/contact" />
            <Route Component = { Cart } path="/cart" />
            <Route Component = { Login } path="/login" />
        </Routes>
    </BrowserRouter>
    )
}

export default Router;