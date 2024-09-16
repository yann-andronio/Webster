import { Fragment } from 'react';
import Navbar from '../navvbar/Navbar';
import s from './header.module.css';

const Header: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <div className={`${s.BoxprentBg}`}>
        <div className={`${s.ChildBox} w-2/4  pl-32 pt-20`}>

          <div className={s.text}>
            <p className='text-3xl'>FREE</p>
            <h1 className={`${s.name} text-6xl font-bold text-white `}>Webster</h1>
            <p className='text-3xl ml-32'>LANCE</p>
          </div>

          <div className={s.description}>
            <p className={` text-white  `} >Chez Webster, nous créons des sites web sur mesure qui propulsent votre entreprise vers le succès. Innovation, performance et design sont au cœur de tout ce que nous faisons pour offrir une expérience en ligne exceptionnelle.</p>

          </div>
        </div>


      </div>

    </Fragment>
  );
};

export default Header;
