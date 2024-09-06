import { Suspense, lazy, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faLayerGroup, faGamepad } from '@fortawesome/free-solid-svg-icons';

const LoggegLayout = lazy(() => import("../layouts/Loggeg.layout.jsx"));
const OptionsModal = lazy(() => import("../components/OptionsModal.jsx"));

import { GlobalContext } from '../context/Global.context.jsx';

const Home = () => {

    document.title = "Inicio | Match battle";

    const { setModalState, modalState } = useContext(GlobalContext);

    const openModal = () => setModalState(true);

    return (
        <Suspense>
            <LoggegLayout>
                <OptionsModal/>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-[10rem] text-black font-nerko-one relative after:absolute after:content-[""] after:top-[77%] after:left-0 after:bg-black after:w-full after:h-2 after:rounded-full'>Match Battle</h1>
                    <div className='grid grid-cols-2 grid-rows-2 gap-6'>
                        <Link className='transition-all hover:scale-105 px-12 flex justify-center items-center gap-3 py-5 font-semibold uppercase bg-black text-white text-center' to="/users">
                            <FontAwesomeIcon className='text-2xl' icon={faUsers}/>
                            Ver usuarios
                        </Link>
                        <Link className='transition-all hover:scale-105 px-12 flex justify-center items-center gap-3 py-5 font-semibold uppercase bg-black text-white text-center' to="/options">
                            <FontAwesomeIcon className='text-2xl' icon={faLayerGroup}/>
                            Opciones
                        </Link>

                        <button
                            onClick={openModal}
                            className='transition-all cursor-pointer hover:scale-105 px-12 col-span-2 flex justify-center items-center gap-3 py-5 font-semibold uppercase bg-black text-white text-center'
                        >
                            <FontAwesomeIcon className='text-2xl' icon={faGamepad}/>
                            ¡Iniciar!
                        </button>
                    </div>
                </div>
            </LoggegLayout>
        </Suspense>
    );
}

export default Home;
