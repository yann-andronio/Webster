import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import s from "./projet.module.css";

const Projet: React.FC = () => {
  return (
    <Fragment>
      <style>
        {`
          .swiper-button-prev, .swiper-button-next {
            color: red !important; /* Appliquer la couleur rouge aux boutons de navigation */
          }
          .swiper-button-prev::after, .swiper-button-next::after {
            font-size: 20px !important; /* Ajuster la taille des icônes si nécessaire */
          }
          .swiper-pagination-bullet {
            background-color: red !important; /* Couleur des bullets de pagination */
            width: 12px !important; /* Taille des bullets */
            height: 12px !important; /* Taille des bullets */
          }
          .swiper-pagination-bullet-active {
            background-color: darkred !important; /* Couleur des bullets actives */
          }
        `}
      </style>
      <div className={`${s.Boxparents}`}>
        <h2 className="text-3xl font-bold text-center mb-6">Nos projets</h2>
        <div className={`${s.projetContainer} p-6`}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
              el: `.${s.customPagination}`, 
            }}
          >
            <SwiperSlide>
              <img src="./assets/images/projets/1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./assets/images/projets/2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./assets/images/projets/3.png" alt="" />
            </SwiperSlide>
          </Swiper>
         
          <div className={s.customPagination}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projet;
