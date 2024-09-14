import { useState } from 'react';
import s from "./navbar.module.css";
import { FaBars } from 'react-icons/fa';
import { RiHome3Line, RiServiceLine, RiMailLine } from 'react-icons/ri';
import { FaProjectDiagram } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClick, setIsClick] = useState("Accueil");

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Webmaster
                </span>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                >
                    <FaBars className="w-5 h-5" aria-hidden="true" />
                </button>

                <div className={`${isOpen ? 'block' : 'hidden'} ${s.box_link} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li onClick={() => setIsClick("Accueil")} className={`${s.link} ${s.colorLinkNavbar} ${isClick === "Accueil" ? s.activeLink : s.inactiveLink}`} id='Accueil'>
                            <RiHome3Line className="inline-block mr-2" /> Accueil
                        </li>
                        <li onClick={() => setIsClick("Projets")} className={`${s.link} ${s.colorLinkNavbar} ${isClick === "Projets" ? s.activeLink : s.inactiveLink}`} id='Projets'>
                            <FaProjectDiagram className="inline-block mr-2" /> Projets
                        </li>
                        <li onClick={() => setIsClick("Services")} className={`${s.link} ${s.colorLinkNavbar} ${isClick === "Services" ? s.activeLink : s.inactiveLink}`} id='Services'>
                            <RiServiceLine className="inline-block mr-2" /> Services
                        </li>
                        <li onClick={() => setIsClick("Apropos")} className={`${s.link} ${s.colorLinkNavbar} ${isClick === "Apropos" ? s.activeLink : s.inactiveLink}`} id='Apropos'>
                            <AiOutlineInfoCircle className="inline-block mr-2" /> A propos
                        </li>
                        <li onClick={() => setIsClick("Contact")} className={`${s.link} ${s.colorLinkNavbar} ${isClick === "Contact" ? s.activeLink : s.inactiveLink}`} id='Contact'>
                            <RiMailLine className="inline-block mr-2" /> Contact
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
