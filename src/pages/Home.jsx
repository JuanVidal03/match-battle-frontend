import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faLayerGroup, faGamepad } from '@fortawesome/free-solid-svg-icons';

const LoggegLayout = lazy(() => import("../layouts/Loggeg.layout.jsx"));

const Home = () => {

    document.title = "Inicio | Match battle";

    return (
        <Suspense>
            <LoggegLayout>
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
                        <Link className='transition-all hover:scale-105 px-12 col-span-2 flex justify-center items-center gap-3 py-5 font-semibold uppercase bg-black text-white text-center' to="/play">
                            <FontAwesomeIcon className='text-2xl' icon={faGamepad}/>
                            ¡Jugar!
                        </Link>
                    </div>
                </div>
            </LoggegLayout>
        </Suspense>
    );
}

export default Home;
