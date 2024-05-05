import { createContext, useContext, useEffect, useState } from "react";

const KedvezmenyekContext=createContext();

export const KedvezmenyekProvider=({children})=>{

    const[kedvezmenyek,setKedvezmenyek]=useState();

    useEffect(()=>{
        fetch('http://localhost:8000/api/kedvezmenyek')
        .then(res=>res.json())
        .then(kedvezmenyek=>setKedvezmenyek(kedvezmenyek))
        .catch(err=>console.log(err))
    });

    return <KedvezmenyekContext.Provider value={{kedvezmenyek}}>
        {children}
    </KedvezmenyekContext.Provider>
};

export default KedvezmenyekContext;