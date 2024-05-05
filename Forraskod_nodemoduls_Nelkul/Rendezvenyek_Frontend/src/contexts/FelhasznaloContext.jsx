import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

const FelhasznaloContext = createContext();

export const FelhasznaloProvider=({children})=>{
    const[felhasznalok, setFelhasznalok] = useState([]);
    const[bejelentkezettFelhasznalo, setBejelentkezettFelhasznalo] = useState(false);
    const[refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    const ujFelhasznalo = (felhasznalo) =>{
        setFelhasznalok([...felhasznalok,felhasznalo]);
    }

    const login = async(felhasznalo_nev, jelszo) => {
        try{
            const response = await fetch(`http://localhost:8000/api/felhasznalok/bejelentkezes`, {
                method: 'POST',
                headers: {'Content-type':'application/json'},
                body: JSON.stringify({felh_nev, jelszo})
            });
            if(!response.ok) {
                throw new Error(`HTTP hiba! státusz: ${response.status}`);
            }
            const data = await response.json();
            sessionStorage.setItem("usertoken", data.token);
            if(data.success){
                setBejelentkezettFelhasznalo({
                    felhasznalo: data.felhasznalo,
                    token: data.token
                });
            } else {
                alert("Message:"+data.message);
            }
        } catch(error) {
            alert('A fetch hívása sikertelen volt. Hiba:', error);
        }
    }

    const adatkuldes = async(formData)=>{
        console.log(formData)
        const keres = await fetch(`http://localhost:8000/api/felhasznalok/regisztracio`,{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(formData)
        });
        const valasz = await keres.text();
        update();
        alert(valasz);
    }
/*
    const adatfelvitel = async(id, formData)=>{        
        const keres = await fetch(`http://localhost:8000/api/felhasznalok/regisztracio`,{
            method: method,
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(formData)
        });
        const valasz = await keres.text();
        update();
        alert(valasz);
    }
    */
/*
    useEffect(()=>{
        fetch(`http://localhost:8000/api/felhasznalok/regisztracio`)
        .then(res=>res.json())
        .then(felhasznalok=>setFelhasznalok(felhasznalok))
        .catch(err=>alert(err));
    }, [refresh]);
*/

    const backendMuvelet = async (adat,method,url)=>{
        const response = await fetch(url,{
            method: method,
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(adat)
        });
        const valasz = await response.json();
        update();
        alert(valasz.message);
    }

    return <FelhasznaloContext.Provider value={{felhasznalok, login, ujFelhasznalo, update,  adatkuldes, backendMuvelet}}>{children}</FelhasznaloContext.Provider>
}

export default FelhasznaloContext;