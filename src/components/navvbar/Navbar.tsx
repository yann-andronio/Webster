import { useState, useEffect } from 'react';
import s from './navbar.module.css';
import { FaBars } from 'react-icons/fa';
import { RiHome3Line, RiServiceLine, RiMailLine } from 'react-icons/ri';
import { FaProjectDiagram } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>('Accueil');

  const scrollToPage = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  };

  const handleClick = (id: string) => {
    setActiveLink(id);
    scrollToPage(id);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Accueil', 'Services', 'Projets', 'Apropos', 'Contact'];
      let currentSection = 'Accueil';

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = id;
          }
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={s.nav}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Webster
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
          <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li
              onClick={() => handleClick('Accueil')}
              className={`${s.link} ${s.colorLinkNavbar} ${activeLink === 'Accueil' ? s.activeLink : s.inactiveLink}`}
            >
              <RiHome3Line className="inline-block mr-2" /> Accueil
            </li>
            <li
              onClick={() => handleClick('Services')}
              className={`${activeLink === 'Services' ? s.activeLink : s.inactiveLink}`}
            >
              <RiServiceLine className="inline-block mr-2" /> Services
            </li>
            <li
              onClick={() => handleClick('Projets')}
              className={`${activeLink === 'Projets' ? s.activeLink : s.inactiveLink}`}
            >
              <FaProjectDiagram className="inline-block mr-2" /> Projets
            </li>
            <li
              onClick={() => handleClick('Apropos')}
              className={`${activeLink === 'Apropos' ? s.activeLink : s.inactiveLink}`}
              id="Apropos"
            >
              <AiOutlineInfoCircle className="inline-block mr-2" /> A propos
            </li>
            <li
              onClick={() => handleClick('Contact')}
              className={`${activeLink === 'Contact' ? s.activeLink : s.inactiveLink}`}
              id="Contact"
            >
              <RiMailLine className="inline-block mr-2" /> Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
