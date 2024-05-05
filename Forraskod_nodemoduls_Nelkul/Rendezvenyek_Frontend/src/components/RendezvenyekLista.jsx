import { useContext } from "react";
import RendezvenyekLista_Elem from "./RendezvenyekLista_Elem";
import RendezvenyekContext from "../contexts/RendezvenyekContext";

function RendezvenyekLista() {
    const { rendezvenyek } = useContext(RendezvenyekContext);

    return (
        <>
            <h1 className="text-center text-2xl font-bold py-4 h-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white">Rendezvények:</h1>
            <div className="h-auto mx-auto flex flex-wrap justify-center space-x-0 md:space-x-2 lg:space-x-4 xl:space-x-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                {
                    rendezvenyek.map((rendezveny, i) => (<RendezvenyekLista_Elem key={i} rendezveny={rendezveny} />))
                }
            </div>
        </>
    )
}

export default RendezvenyekLista;
