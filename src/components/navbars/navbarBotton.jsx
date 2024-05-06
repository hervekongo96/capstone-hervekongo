import React, { useState } from 'react';
import './style.css'
import { Link, NavLink } from 'react-router-dom';
import Filterbutton from '../buttons/filterbutton';

const MenuComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="bg-white flex flex-col sm:flex-row justify-between items-center p-4">
        <div className="relative inline-block text-left sm:order-1">
            <div>
                <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none" id="options-menu" aria-haspopup="true" aria-expanded="true" onClick={() => setIsOpen(!isOpen)}>
                Développeur
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                </button>
            </div>

            {isOpen ? (
                <div style={{ minWidth: '100%' }} className="origin-top-right absolute right-0 bottom-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 1</Link>
                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 2</Link>
                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 3</Link>
                </div>
                </div>
            ) : null}
        </div>
        <div className="overflow-x-auto flex gap-8 justify-center font-bold text-xl space-x-4 mt-4 sm:mt-0 sm:order-2">
            <NavLink to={'/'} className={`text-gray-600 actif-btn`} onClick={handleClick}>All</NavLink>
            <NavLink to={'/web'} className={`text-gray-600 actif-btn`} onClick={handleClick}>Web</NavLink>
            <NavLink  to={'/mobile'} className={`text-gray-600  actif-btn`} onClick={handleClick}>Mobile</NavLink>
            <NavLink to={'/wordpress'} className={`text-gray-600 actif-btn`} onClick={handleClick}>Wordpress</NavLink>
            <NavLink to={'/wireframe'} className={`text-gray-600 actif-btn`} onClick={handleClick}>Wireframe</NavLink>
            <NavLink to={'/prototype'} className={`text-gray-600 actif-btn`} onClick={handleClick}>Prototype</NavLink>
        </div>
        <Filterbutton />
    </div>
  );
};

export default MenuComponent;