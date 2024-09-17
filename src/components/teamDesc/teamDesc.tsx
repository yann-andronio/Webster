import { Fragment } from "react/jsx-runtime";
import s from "../../css/team.module.css";
import sammy from "../../assets/images/sammy.png";
import iannis from "../../assets/images/Iannis.png";
import tahiana from "../../assets/images/10.png";
import andro from "../../assets/images/14.png";

function TeamDesc(){
    const members = [
        {
            id: 1,
            name: "Sammy",
            image: sammy,
            post: "Designer",
            color:"blue",
            description: "Conçoit l'apparence visuelle et l'ergonomie des interfaces(UX/UI),"
        },
        {
            id: 2,
            name: "Iannis",
            image: iannis,
            post: "Back-end",
            color: "yellow",
            description: "En charge de l'intégration d'API et de la gestion des bases de données (SQL ou NoSQL)"
        },
        {
            id: 3,
            name: "Tahiana",
            image: tahiana,
            post: "Full-Stack",
            color: "green",
            description: " Combine compétences frontend et backend pour créer des applications web complètes et fonctionnelles."
        },
        {
            id: 4,
            name: "Andronio",
            image: andro,
            post: "Front-end",
            color: "red",
            description: " Transforme les maquettes en pages web dynamiques en utilisant React."
        }
    ]

    return(
        <Fragment>
            <div className={s.memberContainer}>
                {members.map((item) => 
                    <div key={item.id} className={`${s.member} `}>
                        <img src={item.image} alt={item.name} style={{height:150,width:150,borderRadius:70}} />  
                        <div className={s.num}>
                            {item.id}
                        </div>    
                        <div className={s.post} style={{color: item.color}}>
                            {item.post}
                        </div>         
                        <div className={s.name}>
                            {item.name}    
                        </div>         
                        <div className={s.description} >
                            {item.description}
                        </div>
                    </div>    
                )}
            </div>
        </Fragment>
    );
}

export default TeamDesc;