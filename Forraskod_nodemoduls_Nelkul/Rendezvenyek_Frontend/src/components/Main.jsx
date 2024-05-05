import { Link } from "react-router-dom";
import szigetvideo from "../videos/event_bg.mp4";

function Main() {
  return (
    <div className="relative h-screen overflow-hidden">
    
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={szigetvideo} type="video/mp4" />
      </video>

      
      <div className="absolute inset-0 bg-black opacity-50"></div>

    
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
        <h1 className="text-6xl font-bold leading-tight mb-6 text-white">Élmények várnak</h1>
        <p className="text-xl text-gray-300 mb-8"></p>
        <Link
          to="/rendezvenylista"
          className="bg-pink-600 text-gray-100 hover:bg-purple-900 py-3 px-8 rounded-full text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:text-amber-400 shadow-md"
        >
          Csatlakozz te is
        </Link>

      </div>
    </div>
  );
}

export default Main;
