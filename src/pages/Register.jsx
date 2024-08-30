import { Suspense, lazy } from "react";

const FormRegister = lazy(() => import("../components/FormRegister.jsx"));
const Loader = lazy(() => import("../components/loader/Loader.jsx"));
import carBg from "../assets/car-bg.jpg";

const Register = () => {

    document.title = "Registro | Match battle";

    return (
        <Suspense fallback={<Loader/>}>
            <div className="flex">
                <div className="w-[40%] h-screen bg-white flex justify-center items-center">
                    <FormRegister/>
                </div>
                <figure className="h-screen w-[60%]">
                    <img className="h-full w-full object-cover" src={carBg} alt="login car image" />
                </figure>
            </div>
        </Suspense>
    );
}

export default Register;
