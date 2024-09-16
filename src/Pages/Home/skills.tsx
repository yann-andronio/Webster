import { Fragment } from "react";
import s from "../../css/team.module.css";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/JS.png";
import react from "../../assets/images/react.png";

function Skill(){

    const langages = [
        {
            logo: html,
            name: "HTML"
        },
        {
            logo: css,
            name: "CSS"
        },
        {
            logo: js,
            name: "JavaScript"
        },
        {
            logo: react,
            name: "React"
        }
    ]
    return(
        <Fragment>
            <div className={s.BGimg}>
                <h1 className={s.h1} style={{margin:25}}>LANGAGE DE PROGRAMMATION</h1>
                <div>
                    {langages.map((item,index) =>
                        <div key={index} style={{width:100}}>
                            <img src={item.logo} alt={item.name} 
                                className={s.langageImg}
                            />
                        </div>    
                    )}
                </div>
            </div>
        </Fragment>
    );
}

export default Skill;