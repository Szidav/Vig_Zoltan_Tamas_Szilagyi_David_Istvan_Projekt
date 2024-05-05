import { Link } from 'react-router-dom';
import React from 'react'; 


function RendezvenyekLista_Elem({ rendezveny }) {
    return (
      <div className="card card-compact m-10 w-96 bg-purple-700 text-white shadow-xl hover:scale-105 hover:bg-purple-900 hover:text-amber-400">
        <div className="relative" style={{ paddingTop: "60%" }}> {/* Fix méretarány létrehozása */}
          <img src={rendezveny.kep} alt={rendezveny.nev} className="absolute inset-0 w-full h-full object-cover" /> {/* Kép igazítása a kártya méretéhez */}
        </div>
        <div className="card-body text-center py-6">
          <h2 className="card-title font-bold">{rendezveny.nev}</h2>
          <div className="text-center mt-5">
          <Link to={'/JegyBerlet'} className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 hover:text-amber-400">Vásárlás</Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default RendezvenyekLista_Elem;
