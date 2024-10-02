import { Fragment } from 'react';
import Navbar from '../navvbar/Navbar';
import s from './header.module.css';

const Header: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <div className={`${s.BoxprentBg}`}   id="Accueil">
        <div className={`${s.ChildBox}  w-full sm:w-3/4 lg:w-2/4 pl-4 sm:pl-16 lg:pl-28 pt-24 sm:pt-32 lg:pt-40 pr-4 sm:pr-16 lg:pr-32 `}   >

          <div className={s.text}>
            <p className='text-3xl text-white mb-1 font-mono'>FREE</p>
            <h1 className={`${s.name} text-7xl font-bold text-white  `}>Webster</h1>
            <p className={`${s.textbottom}text-7xl  text-white mt-1 ml-72 font-mono`}>LANCE</p>
          </div>

          <div className={`${s.description} pt-12`}>
            <p className={` text-white w-3/4 text-base font-bold`} >Chez Webster, nous créons des sites web sur mesure qui propulsent votre entreprise vers le succès. Innovation, performance et design sont au cœur de tout ce que nous faisons pour offrir une expérience en ligne exceptionnelle.</p>

          </div>
        </div>


      </div>

    </Fragment>
  );
};

export default Header;
