import { useContext } from "react";
import Jegy from "./Jegy";
import RendezvenyekContext from "../contexts/RendezvenyekContext";
import { Link } from "react-router-dom";

function Cart({rendezveny}) {

  const{rendezvenyek}=useContext(RendezvenyekContext);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl text-center font-semibold mb-4">Kosár</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left font-semibold">Rendezvény</th>
                  <th className="text-left font-semibold">Ár</th>
                  <th className="text-left font-semibold">Mennyiség</th>
                  <th className="text-left font-semibold">Végösszeg</th>
                </tr>
              </thead>
              {
                rendezvenyek.map((rendezveny, i)=>(<Jegy key={i} rendezveny={rendezveny}/>))
              }
            </table>
          </div>
        </div>
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Összegzés</h2>
            <div className="flex justify-between mb-2">
              <span>Részösszeg</span>
              <span>-</span>
            </div>
            <hr className="my-2"/>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Végösszeg</span>
                <span className="font-semibold">25.000 Ft</span>
              </div>
              <div className="text-center">
                <button  className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-5 w-full">Fizetés</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart