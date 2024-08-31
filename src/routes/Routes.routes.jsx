import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const PrivateRoutes = lazy(() => import("./Private.routes.jsx"));
const Loader = lazy(() => import("../components/loader/Loader.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const Register = lazy(() => import("../pages/Register.jsx"));
const Home = lazy(() => import("../pages/Home.jsx"));
const Options = lazy(() => import("../pages/Options.jsx"));
const Play = lazy(() => import("../pages/Play.jsx"));
const Users = lazy(() => import("../pages/Users.jsx"));


const AllRoutes = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                {/* public routes */}
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>

                {/* private routes */}
                <Route element={<PrivateRoutes/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/play" element={<Play/>}/>
                    <Route path="/options" element={<Options/>}/>
                    <Route path="/users" element={<Users/>}/>
                </Route>
            </Routes>
        </Suspense>
    );
}

export default AllRoutes;
