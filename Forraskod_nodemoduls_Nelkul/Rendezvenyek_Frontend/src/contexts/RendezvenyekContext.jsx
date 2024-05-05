import { createContext, useEffect, useState } from 'react'


const RendezvenyekContext=createContext();

export const RendezvenyekProvider=({children})=>{

    const[rendezvenyek,setRendezvenyek]=useState([]);
    

    useEffect(()=>{
        fetch('http://localhost:8000/api/rendezvenyek')
        .then(res=>res.json())
        .then(rendezvenyek=>setRendezvenyek(rendezvenyek))
        .catch(err=>console.log(err))
    });


    return <RendezvenyekContext.Provider value={{rendezvenyek}}>
        {children}
    </RendezvenyekContext.Provider>
};


export default RendezvenyekContext;