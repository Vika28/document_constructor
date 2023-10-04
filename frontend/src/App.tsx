import {observer} from "mobx-react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/registration/Signup";
import DashboardPage from "./pages/dashboard/DashboardPage";
import Header from "./components/header/Header";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Signup/>}/>
                <Route path='/dashboard/*' element={<DashboardPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default observer(App);