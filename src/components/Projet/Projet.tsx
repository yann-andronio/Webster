import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import s from "./projet.module.css";

const Projet: React.FC = () => {
    return (
        <Fragment>
            <style>
                {`
          .swiper-button-prev, .swiper-button-next {
            background-color: #444444; 
            border-radius: 50%; 
            width: 40px; 
            height: 40px; 
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0; 
            position: absolute;
            top: 50%;
            transform: translateY(-50%); 
            z-index: 10; 
          }
          .swiper-button-prev {
            left: -50px; 
          }
          .swiper-button-next {
            right: -50px;
          }
          .swiper-button-prev::after, .swiper-button-next::after {
            font-size: 20px; 
            font-weight: bold;
            color: white;
          }
          .swiper-pagination-bullet {
            background-color: white;
            width: 12px;
            height: 12px; 
          }
          .swiper-pagination-bullet-active {
            background-color: white; 
          }
          .customPagination {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }

         /* ecran phone kely*/
         @media (max-width: 768px) {
            .swiper-button-prev, .swiper-button-next{
    display : none}
     }   
  
                 /* ecran phone kely be*/
             @media (max-width: 480px) {
     .swiper-button-prev, .swiper-button-next{
      display : none}
  }
        `}
            </style>


            <div className={`${s.Boxparents}`} id="Projets">
                <h2 className="text-3xl font-bold text-center mb-6">Nos projets</h2>
                <div className={`${s.projetContainer} p-6`} style={{ position: 'relative' }}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }}
                        pagination={{
                            clickable: true,
                            el: `.${s.customPagination}`,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
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

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </Fragment>
    );
};

export default Projet;
