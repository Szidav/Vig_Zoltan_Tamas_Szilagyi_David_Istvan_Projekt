import { useState, useEffect, createContext } from "react";

const JegyekContext = createContext();

export const JegyekProvider = ({children})=>{
    
    const[jegyek, setJegyek] = useState([]);
   

    useEffect(()=>{
        fetch(`http://localhost:8000/api/jegyek`)
        .then(res=>res.json())
        .then(jegyek=>setJegyek(jegyek))
        .catch(err=>console.log(err));
    });

    return <JegyekContext.Provider value={{jegyek}}>
        {children}
    </JegyekContext.Provider>
};

export default JegyekContext;