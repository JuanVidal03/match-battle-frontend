import { lazy, useContext } from "react";

const CardsModal = lazy(() => import("../components/CardsModal"));

import { GlobalContext } from "../context/Global.context";

const CardPlayer = ({user}) => {

    const { setModalState, modalState } = useContext(GlobalContext);

    const repartirCartas = async() => {

    }

    const seeCards = async() => {
        
    }

    console.log(user);

    return (
        <div className="card bg-dark text-primary-content w-full max-w-80">
            { modalState && <CardsModal/> }
            <div className="card-body">
                <h2 className="card-title">{ user.nombreCompleto }</h2>
                <p>{ user.email }</p>
                <p>{ user.telefono }</p>
                <div className="card-actions justify-center mt-4">
                    <button onClick={() => setModalState(true)} className="btn w-full">Ver cartas</button>
                </div>
            </div>
        </div>
    );
}

export default CardPlayer;
