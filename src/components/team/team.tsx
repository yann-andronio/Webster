import { Fragment } from "react/jsx-runtime";
import s from "./team.module.css"
import TeamDesc from "../teamDesc/teamDesc";

function Team(){
    return(
        <Fragment>
            <div className={s.presentation}   id="Apropos">
                <h5 className={s.h5}>Equipe</h5>
                <h1 className={s.h1}>PRESENTATION DE L'EQUIIPE</h1>
                <p className={s.desc}>Ensemble, on crée l'excellence </p>

              <TeamDesc />
            </div>
        </Fragment>
    );
}

export default Team;