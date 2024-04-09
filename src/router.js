import {Route, Routes, BrowserRouter} from "react-router-dom"

//componentes
import teste from "./teste"
const Router = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route Component = { teste } path="/teste" />
        </Routes>
    </BrowserRouter>
    )
}

export default Router;