import { Fragment } from 'react'
// import Team from '../../components/team/team'
// import Skill from '../../components/skills/skills'
import Header from '../../components/header/Header'
import Service from '../../components/servicess/Service'
import Projet from '../../components/Projet/Projet'

export default function Home() {
    return (
        <Fragment>
            <Header />
            <Service />
            <Projet />
            {/* <Team />
            <Skill /> */}
        </Fragment>
    )
}
