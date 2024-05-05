import { useContext, useState } from "react";
import logo from '../assets/logo.png'
import hatterkep from '../assets/hatterkep.jpg'
import hatterkepuj from '../assets/hatterkepuj4.png'
import FelhasznaloContext from "../contexts/FelhasznaloContext";

function UjFelhasznalo() {
  const{adatkuldes}=useContext(FelhasznaloContext)

  let formObj = {
    v_nev: "",
    k_nev: "",
    ir_szam: "",
    telepules_neve: "",
    kozterulet_neve: "",
    kozterulet_jellege: "",
    hazszam: "",
    telefonszam: "",
    felh_nev: "",
    jelszo: "",
    e_mail: "",
    adoszam: "", // Hozzáadva az adószám mező
    szul_datum: "2023-11-13",
    allapot: "aktív",
    utolso_bel: "2024-05-05"
  };

  const [formData, setFormData] = useState(formObj);
  const [isCompany, setIsCompany] = useState(false); // Állapot az egyéni vagy céges regisztráció kiválasztásához

  const writeFormData = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    adatkuldes(formData);
    setFormData(formObj);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-cover bg-center" style={{ backgroundImage: `url(${hatterkepuj})` }}>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900 text-center">Miként szeretnél regisztrálni?</label>
        <select value={isCompany ? 'company' : 'individual'} onChange={e => setIsCompany(e.target.value === 'company')} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-purple-200">
          <option value="individual">Magánszemély</option>
          <option value="company">Vállalat</option>
        </select>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-purple-200 px-12 bg-opacity-60 pb-6 pt-6 rounded-lg">
        <img className="mx-auto h-25 w-25" src={logo} alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Regisztráció</h2>
        <form className="space-y-6"   onSubmit={onSubmit}>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 float-left">{isCompany ? 'Cég neve' : 'Vezetéknév'}</label>
            <div className="mt-2">
              <input id="v_nev" name="v_nev" type="text" autoComplete="v_nev" onChange={writeFormData} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" />
            </div>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 float-left">{isCompany ? 'Cégforma' : 'Keresztnév'}</label>
            <div className="mt-2">
              <input id="k_nev" name="k_nev" type="text" autoComplete="k_nev" onChange={writeFormData} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" />
            </div>
          </div>
          {/* További űrlapelemek */}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 float-left">Irányítószám</label>
            <div className="mt-2">
              <input id="ir_szam" name="ir_szam" type="text" autoComplete="ir_szam" onChange={writeFormData} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" />
            </div>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 float-left">Település neve</label>
            <div className="mt-2">
              <input id="telepules_neve" name="telepules_neve" type="text" onChange={writeFormData} autoComplete="telepules_neve" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" />
            </div>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 float-left">Közterület neve</label>
            <div className="mt-2">
              <input id="kozterulet_neve" name="kozterulet_neve" type="text" onChange={writeFormData} autoComplete="kozterulet_neve" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" />
            </div>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 float-left">Közterület jellege</label>
            <div className="mt-2">
              <input id="kozterulet_jellege" name="kozterulet_jellege" type="text"  onChange={writeFormData} autoComplete="kozterulet_jellege" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" />
            </div>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 float-left">Házszám</label>
            <div className="mt-2">
              <input id="hazszam" name="hazszam" type="text" autoComplete="hazszam" onChange={writeFormData} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" />
            </div>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 float-left">Telefonszám</label>
            <div className="mt-2">
              <input id="telefonszam" name="telefonszam" type="text" autoComplete="telefonszam"  onChange={writeFormData} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" />
            </div>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 float-left">Felhasználónév</label>
            <div className="mt-2">
              <input id="felh_nev" name="felh_nev" type="text" onChange={writeFormData} autoComplete="felh_nev" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" />
            </div>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 float-left">Email-cím</label>
            <div className="mt-2">
              <input id="e_mail" name="e_mail" type="email" autoComplete="e_mail"  onChange={writeFormData} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" />
            </div>
          </div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 float-left">Jelszó</label>
          <div className="mt-2">
            <input id="jelszo" name="jelszo" type="password" autoComplete="current-password" onChange={writeFormData} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4" />
          </div>

          {/* Adószám mező csak akkor jelenik meg, ha vállalat */}
          {isCompany && (
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <label htmlFor="adoszam" className="block text-sm font-medium leading-6 text-gray-900 float-left">
                Adószám
              </label>
              <div className="mt-2">
                <input
                  id="adoszam"
                  name="adoszam"
                  type="text"
                  autoComplete="adoszam"
                  required
                  onChange={writeFormData}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
                  disabled={!isCompany} // Mező letiltása, ha nem vállalat
                />
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-amber-400"
            >
              Regisztráció
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UjFelhasznalo;
