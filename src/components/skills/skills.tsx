import { Fragment } from "react";
import s from "../../css/skill.module.css";
import html5 from "../../assets/images/HTML5.png";
import css3 from "../../assets/images/CSS3.png";
import Js from "../../assets/images/javascript-64.png";
import mongoDB from "../../assets/images/mongodb.png";
import express from "../../assets/images/express (2).png";
import ReactIco from "../../assets/images/react-native-96.png";
import nodeIco from "../../assets/images/node-js.png";

function Skill(){


    const langages = [
        {
            logo: html5, name: "HTML"
        },
        {
            logo: css3,name: "CSS"
        },
        {
            logo: Js,name: "JavaScript"
        },
        {
            logo: mongoDB,name: "MongoDB"
        },
        {
            logo: express,name: "Express.js"
        },
        {
            logo: ReactIco,name: "React.js"
        },
        {
            logo: nodeIco,name: "Node.js"
        }
    ]


    return(
        <Fragment>
            <div className={s.BGimg}>
                <h1 className={s.h1} style={{margin:25}}>LANGAGE DE PROGRAMMATION</h1>
                <div className={s.skillContainer}>
                    {langages.map((item,index) =>
                        <div key={index}  
                           style={{
                                width: index >=3 ? 1000:"auto"
                           }}
                        className={s.language}>
                            <img src={item.logo} alt={item.name} 
                                className={s.langageImg}
                            />
                            <div className={s.name}>{item.name}</div>
                        </div>    
                    )}
                </div>
            </div>
        </Fragment>
    );
}

export default Skill;