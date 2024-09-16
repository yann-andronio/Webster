import { Fragment } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import s from "./projet.module.css"; 

const Projet: React.FC = () => {
    return (
        <Fragment>
            <div className={`${s.Boxparents} `}>
                <h2 className={`text-3xl font-bold text-center mb-6`}>Nos projets</h2>
                <div className={`${s.projetContainer} p-6`}>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className={s.slideContent}>Slide 1 - Contenu</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.slideContent}>Slide 2 - Contenu</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={s.slideContent}>Slide 3 - Contenu</div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </Fragment>
    );
};

export default Projet;
