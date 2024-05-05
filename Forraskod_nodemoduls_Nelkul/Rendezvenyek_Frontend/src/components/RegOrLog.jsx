import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import hatterkepreg from '../assets/hatterkepreg.png';

function RegOrLog() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false); // Állapot a felugró ablak megnyitásához

  const openRegistration = () => {
    setShowRegistration(true);
  };

  const openLogin = () => {
    setShowRegistration(false);
  };

  const openForgotPasswordModal = () => {
    setShowForgotPasswordModal(true);
  };

  const closeForgotPasswordModal = () => {
    setShowForgotPasswordModal(false);
  };

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-cover bg-center" style={{backgroundImage: `url(${hatterkepreg})`}}>
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-purple-200 px-12 bg-opacity-60 pb-6 pt-6 rounded-lg">
        <img class="mx-auto h-45 w-45" src={logo} alt="Your Company"/>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Bejelentkezés</h2>
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900 float-left">E-mail cím</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 border-1 border-gray-300"/>
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Jelszó</label>
              <div class="text-sm">
                {/* Elfelejtett jelszó link */}
                <div class="text-sm text-center">
                  <a href="#" class="font-semibold text-purple-900 hover:text-amber-400" onClick={openForgotPasswordModal}>Elfelejtett jelszó?</a>
                </div>
              </div>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"/>
            </div>
          </div>
  
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-amber-400">Bejelentkezés</button>
          </div>
        </form>
  
        {/* Regisztrációs link */}
        <p class="mt-10 text-center text-sm text-black-500">
          Nincs még fiókja?
          <Link to={'/ujfelhasznalo'} class="font-semibold leading-6 text-purple-900 hover:text-amber-400"> Regisztrálj itt!</Link>
        </p>
      </div>
  
      {/* Elfelejtett jelszó modális ablak */}
      {showForgotPasswordModal && (
        <div class="fixed inset-0 flex items-center justify-center z-50">
          <div class="absolute inset-0 bg-black opacity-75"></div>
          <div class="bg-purple-200 p-8 rounded-md z-50">
            <h2 class="text-xl font-bold mb-4">Elfelejtett jelszó</h2>
            <form>
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-mail cím</label>
                <input id="email" type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-2" />
              </div>
              <div class="flex justify-end">
                <button type="button" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:text-amber-400" onClick={closeForgotPasswordModal}>
                  Küldés
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default RegOrLog;
