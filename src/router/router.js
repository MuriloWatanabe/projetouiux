import { Route, Routes, BrowserRouter} from "react-router-dom"

//componentes
import Home from "../pages/Home/home"
import About from "../pages/About/about"
import Contact from "../pages/ContactUs/contact"
import Cart from "../pages/Cart/cart"
import Login from "../pages/Login/login"
import Product from "../pages/Product/product"
import Order from "../pages/Order/order"
import Signin from "../pages/Signin/signin"
import Finish from "../pages/Finish/finish"
import FinishBuy from "../pages/ProductBuy/finishbuy"

const Router = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route Component = { Home } exact path="/" />
            <Route Component = { About } path="/about" />
            <Route Component = { Contact } path="/contact" />
            <Route Component = { Cart } path="/cart" />
            <Route Component = { Login } path="/login" />
            <Route Component = { Product } path="/product" />
            <Route Component = { Order } path="/order" />
            <Route Component = { Signin } path="/signin" />
            <Route Component = { Finish } path="/finish" />
            <Route Component = { FinishBuy } path="/finishbuy" />
        </Routes>
    </BrowserRouter>
    )
}

export default Router;