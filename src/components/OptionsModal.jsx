import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import socket from "../../utils/socket";

import { GlobalContext } from "../context/Global.context";

import { createPartida } from "../services/partida.services";

const OptionsModal = () => {

    const { modalState, setModalState, users } = useContext(GlobalContext);

    const [usersAvailable, setUsersAvaible] = useState(users);
    const [players, setPlayers] = useState([]);
    const [numberPlayers, setNumberPlayers] = useState(2);

    const navigate = useNavigate();

    useEffect(() => {
        const getAvailableUsers = () => {
            
            const activeUsers = users.filter(user => user.estado === true);
            setUsersAvaible(activeUsers);

        }
        getAvailableUsers();
    }, []);

    const closeModal = () => setModalState(false);

    const addPlayerToPartida = (playerId) => setPlayers([...players, playerId]);

    const handleRange = (e) => setNumberPlayers(Number(e.target.value));

    const handleInitializeGame =  async() => {

        const partidaSchema = {
            numParticipantes: numberPlayers,
            participantes: players,
            duracion: {
                minutos: 0,
                segundos: 0
            }
        }

        const partidaCreated = await createPartida(partidaSchema);
        if(partidaCreated.status != 201) return toast.error(partidaCreated.response.data.message);
        
        closeModal();
        navigate(`/play/${partidaCreated.data.data._id}`);

    }


    return (
        <div className={`${modalState ? "opacity-100 visible" : "opacity-0 invisible"} transition-all fixed w-screen h-screen top-0 left-0 z-30 flex justify-center items-center bg-dark-gradient backdrop-blur-3xl`}>
            <div className="w-full relative max-w-[700px] h-[80%] bg-white p-12 overflow-y-auto">
                <FontAwesomeIcon
                    onClick={closeModal}
                    className="absolute right-8 top-8 text-2xl cursor-pointer" icon={faXmarkCircle}
                />
                
                <h4 className="text-3xl font-bold">Configuracion de partida!</h4>

                <form
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                    className="flex flex-col py-8 gap-8"
                >
                    <div className="flex flex-col gap-3">
                        <label className="font-semibold text-lg">Numero de participantes:</label>
                        <input onChange={(e) => handleRange(e)} value={numberPlayers} min="2" max="7" type="range" step="1" className="range"/>
                        <div className="flex w-full justify-between px-2 text-xs">
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold text-lg">Participantes disponibles:</label>
                        <div className="grid grid-cols-2 gap-4">
                            {
                                usersAvailable?.map(user => (
                                    <div key={user._id} className="p-4 border-2 border-dark">
                                        <p className="font-semibold">Nombre: <span className="font-normal">{ user.nombreCompleto }</span></p>
                                        <p className="font-semibold">E-mail: <span className="font-normal">{ user.email }</span></p>
                                        <p className="font-semibold">Telefono: <span className="font-normal">{ user.telefono }</span></p>
                                        <button onClick={() => addPlayerToPartida(user._id)} className="mt-4 w-full bg-dark text-white py-2">Agregar a partida</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <button
                        onClick={handleInitializeGame}
                        className='transition-all cursor-pointer hover:scale-105 px-12 col-span-2 flex justify-center items-center gap-3 py-5 font-semibold uppercase bg-black text-white text-center'
                    >
                        <FontAwesomeIcon className='text-2xl' icon={faGamepad}/>
                        ¡Jugar!
                    </button>
                </form>

            </div>
        </div>
    );
}

export default OptionsModal;
