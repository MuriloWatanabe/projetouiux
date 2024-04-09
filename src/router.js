import { Route, Routes, BrowserRouter} from "react-router-dom"

//componentes
import Teste from "../src/teste"

const Router = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route Component = { Teste } path="/teste" />
        </Routes>
    </BrowserRouter>
    )
}

export default Router;