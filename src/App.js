import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style2.css'
import { Layout } from "./component/ui/Layout"
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import NotFound from './pages/NotFound'
import { Register } from "./pages/Register";
import Admin from './pages/Admin'
import Reseller from './pages/Reseller'
import EndUser from './pages/EndUser'
import AccountManager from "./pages/AccountManager";


const App = () =>{
    const token = localStorage.getItem("token")
    if (!token){
        return <Login />
    }
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="reseller" element={<Reseller />} />
                    <Route path="enduser" element={<EndUser />} />
                    <Route path="accountmanager" element={<AccountManager />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;