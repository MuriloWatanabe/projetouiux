import { Route, Routes, BrowserRouter} from "react-router-dom"

//componentes
import Teste from "../teste"

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