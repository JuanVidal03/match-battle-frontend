import { Suspense, lazy, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

const Loader = lazy(() => import("../components/loader/Loader"));
const LoggegLayout = lazy(() => import("../layouts/Loggeg.layout"));
const CardPlayer = lazy(() => import("../components/CardPlayer"));
const CardsModal = lazy(() => import("../components/CardsModal"));

import { getPartidaById } from '../services/partida.services';
import { toast } from 'react-toastify';

import { GlobalContext } from '../context/Global.context';

const Play = () => {

    document.title = "¡Juega! | Match battle";

    const { modalState } = useContext(GlobalContext);

    const [loading, setLoading] = useState(false);
    const [players, setPlayers] = useState([]);

    const { id } = useParams();

    // obteniendo los participantes
    useEffect(() => {
        setLoading(true);

        const getPartidaData = async() => {
            
            try {

                const partida = await getPartidaById(id);
                setPlayers(partida.data.data.participantes);
                setLoading(false);

            } catch (error) {
                toast.error(error.message);
                setLoading(false);
            }    
    
        }
        getPartidaData();

    }, []);

    
    return (
        <Suspense fallback={<Loader/>}>
            <LoggegLayout>
                { loading && <Loader/> }
                <div className='flex flex-wrap gap-14 justify-center items-center'>
                    {
                        players?.map(player => (
                            <CardPlayer
                                key={player._id}
                                user={player}
                            />
                        ))
                    }
                </div>
                
            </LoggegLayout>
        </Suspense>
    );
}

export default Play;
