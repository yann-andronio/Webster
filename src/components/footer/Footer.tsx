import React from "react";
import { Fragment } from "react";
import s from "./footer.module.css";
import facebook from "../../assets/images/facebook.png";
import whatsapp from "../../assets/images/whatsApp.png";
import visa from "../../assets/images/visa.png";
import paypal from "../../assets/images/paypal.png";

const Footer: React.FC = () =>{
    return(
        <Fragment >
            <footer className={s.footer}>
                <div className={s.footerContainer}>
                    <div className='mt-11'>
                        <h3 className='text-white text-3xl font-bold italic'>Webster</h3>
                    </div>

                    <div className={s.iconSection}>
                        <div className={s.socialNetwork}>
                            <img src={whatsapp} alt="WhatsApp" className='w-6 h-5 ' />
                            <img src={facebook} alt="Facebook" className='w-6 h-5 '/>
                        </div>
                        <div style={{
                            display:"flex",
                            gap:10
                        }}>
                            <div className='text-white font-bold'>ENTREPRISE</div>
                            <div className='text-white font-bold'>PERSONNELS</div>
                        </div>
                        <div className={s.paiement}>
                            <img src={paypal} alt="paypal" className='w-11 h-12' />
                            <img src={visa} alt="visa" className='w-10 h-10'/>
                        </div>
                    </div>
                </div>
                <div className={s.coordonnes}>
                    <div className='text-white font-semibold text-sm'>+261328580321</div>
                    <div className='text-white font-semibold text-sm'>webster@gmail.com</div>
                    <div className='text-white font-bold'>Webster 2024 | <span>Tout droits reservés</span></div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;