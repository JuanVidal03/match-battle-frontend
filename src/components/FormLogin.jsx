import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faL } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import Loader from "./loader/Loader.jsx";

import { loginService } from "../services/auth.services.js";

import { AuthContext } from "../context/Auth.context.jsx";


const FormLogin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [loading, setLoading] = useState(false);

    const { setUser, setIsAuthenticated } = useContext(AuthContext);

    const navigate = useNavigate();

    const login = handleSubmit(async(data) => {
        setLoading(true);

        const loginResponse = await loginService(data);

        try {
            
            setUser(loginResponse.data.data);
            setIsAuthenticated(true);
            setLoading(false);
            toast.success("¡Sesion iniciada correctamente!");
            navigate("/");

        } catch (error) {
            setUser(null);
            setIsAuthenticated(false);
            setLoading(false);
            if(!loginResponse.status || loginResponse.status !== 200) return toast.error(loginResponse.response.data.message)
        }
        
    });

    return (
        <div className="w-full max-w-[80%] p-4 flex flex-col gap-8">
            { loading && <Loader/> }
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold">¡Bienvenido de vuelta!</h1>
                <p className="text-lg text-gray-600">Te estabamos esperando.</p>
            </div>

            <form onSubmit={(e) => {
                e.preventDefault();
                login();
            }}>

                <div className="w-full mb-4">
                    <label className="mb-1 block font-medium">Correo eléctronico*</label>
                    <input
                        className="border-gray-300 border w-full p-3 rounded-lg outline-none transition-all focus:bg-gray-100"
                        type="email"
                        placeholder="carlosperez@gmail.com"
                        {
                            ...register("email", {
                                required: {
                                    value: true,
                                    message: "Este campo es obligatorio."
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'El formato del email no es válido.',
                                },
                            })
                        }
                    />
                    { errors.email && <span className="text-red-500 block">{errors.email.message}</span> }
                </div>

                <div className="w-full relative">
                    <label className="mb-1 block font-medium">Contraseña*</label>
                    <input
                        className="border-gray-300 border w-full p-3 rounded-lg outline-none transition-all focus:bg-gray-100"
                        type={ isPasswordHidden ? "password" : "text" }
                        placeholder="••••••••••••"
                        {
                            ...register("password", {
                                required: {
                                    value: true,
                                    message: "Este campo es obligatorio."
                                },
                                minLength: {
                                    value: 6,
                                    message: "Debe tener minimo 6 valores."
                                }
                            })
                        }
                    />
                    { errors.password && <span className="text-red-500 block">{errors.password.message}</span> }
                    <div className="absolute w-7 top-[55%] right-5">
                        <FontAwesomeIcon
                            className="font-semibold text-xl cursor-pointer"
                            onClick={() => isPasswordHidden ? setIsPasswordHidden(false) : setIsPasswordHidden(true) }
                            icon={isPasswordHidden ? faEyeSlash : faEye}
                        />
                    </div>
                </div>

                <div className="pt-7">
                    <button className="transition-all bg-dark text-white hover:tracking-wider hover:shadow-xl w-full font-semibold py-3 rounded-lg">Ingresar</button>
                </div>

            </form>
        </div>
    );
}

export default FormLogin;
