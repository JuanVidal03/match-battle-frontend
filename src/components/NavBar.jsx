import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";

import Loader from "../components/loader/Loader.jsx";

import { AuthContext } from '../context/Auth.context.jsx';

import { logoutService } from '../services/auth.services.js';

const NavBar = () => {

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const logout = async() => {
        setLoading(true);
        try {

            await logoutService(user._id || user.data._id);
            setLoading(false);
            navigate("/login");

        } catch (error) {
            toast.error(`Error al cerrar sesion: ${error.message}`);
            setLoading(false);
        }
    }

    return (
        <div className='w-full py-5 px-12 flex justify-between items-center'>
            { loading && <Loader/> }
            <h6 className='text-3xl font-semibold'>¡Bienvenido, <span className='font-extrabold'>{ user.nombreCompleto || user.data.nombreCompleto }!</span></h6>
            <div onClick={logout} className='bg-dark rounded-custom-border-radius cursor-pointer w-24 h-24 flex justify-center items-center transition-all hover:scale-105 hover:shadow-md'>
                <FontAwesomeIcon className='text-4xl text-white' icon={faRightFromBracket}/>
            </div>
        </div>
    );
}

export default NavBar;
