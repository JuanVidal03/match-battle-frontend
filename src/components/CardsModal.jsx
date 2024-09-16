import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faGamepad } from "@fortawesome/free-solid-svg-icons";

import { GlobalContext } from "../context/Global.context";


const CardsModal = () => {

    const { modalState } = useContext(GlobalContext);

    return (
        <div lassName={`${modalState ? "opacity-100 visible" : "opacity-0 invisible"} transition-all fixed w-screen h-screen top-0 left-0 z-30 flex justify-center items-center bg-dark-gradient backdrop-blur-3xl`}>
            <div className="w-full relative max-w-[700px] h-[80%] bg-white p-12 overflow-y-auto">
            </div>
        </div>
    );
}

export default CardsModal;
