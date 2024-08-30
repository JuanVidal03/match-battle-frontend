import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faL } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import Loader from "./loader/Loader.jsx";

import { registerService } from "../services/auth.services.js";

import { AuthContext } from "../context/Auth.context.jsx";


const FormRegister = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [loading, setLoading] = useState(false);

    const { setUser, setIsAuthenticated } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = handleSubmit(async(data) => {
        
        setLoading(true);

        data.estado  = false;
        data.cartas = [];

        const registerResponse = await registerService(data);

        try {
            setUser(null)
            setIsAuthenticated(false);
            setLoading(false);
            toast.success("¡Usuario registrado correctamente!");
            navigate("/login");

        } catch (error) {
            setUser(null);
            setIsAuthenticated(false);
            setLoading(false);
            if(!registerResponse.status || registerResponse.status !== 201) return toast.error(registerResponse.response.data.message);
        }
        
    });

    return (
        <div className="w-full max-w-[80%] p-4 flex flex-col">
            { loading && <Loader/> }
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold">¡Te estabamos esperando!</h1>
                <p className="text-lg text-gray-600">Bienvenido, crea una cuenta gratis.</p>
            </div>

            <form
                className="mt-8"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleRegister();
                }}
            >

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

                <div className="w-full mb-4">
                    <label className="mb-1 block font-medium">Nombre completo*</label>
                    <input
                        className="border-gray-300 border w-full p-3 rounded-lg outline-none transition-all focus:bg-gray-100"
                        type="text"
                        placeholder="Carlos Perez"
                        {
                            ...register("nombreCompleto", {
                                required: {
                                    value: true,
                                    message: "Este campo es obligatorio."
                                }
                            })
                        }
                    />
                    { errors.nombreCompleto && <span className="text-red-500 block">{errors.nombreCompleto.message}</span> }
                </div>

                <div className="w-full mb-4">
                    <label className="mb-1 block font-medium">Numero de telefono*</label>
                    <input
                        className="border-gray-300 border w-full p-3 rounded-lg outline-none transition-all focus:bg-gray-100"
                        type="text"
                        placeholder="3137275474"
                        {
                            ...register("telefono", {
                                required: {
                                    value: true,
                                    message: "Este campo es obligatorio."
                                },
                                pattern: {
                                    value: /^\d+$/,
                                    message: 'Por favor, ingrese un número entero válido.'
                                }
                            })
                        }
                    />
                    { errors.telefono && <span className="text-red-500 block">{errors.telefono.message}</span> }
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
                    <button className="transition-all bg-dark text-white hover:tracking-wider hover:shadow-xl w-full font-semibold py-3 rounded-lg">Registrarme</button>
                </div>

            </form>
            
            <div className="mt-4">
                <p className="text-center text-gray-600">¿Ya tienes una cuenta? <Link className="text-black font-semibold" to="/login">Iniciar Sesion</Link></p>
            </div>

        </div>
    );
}

export default FormRegister;
