import React, { Fragment } from 'react';
import { FaLaptopCode, FaHeadset, FaProjectDiagram, FaWrench, FaWarehouse, FaChalkboardTeacher, FaSearch, FaCogs } from 'react-icons/fa';
import s from "./service.module.css";

type ServiceItem = {
    name: string;
    description: string;
    icon: JSX.Element;
}

const services: ServiceItem[] = [
    { 
        name: "Développement Web", 
        description: "Création de sites web personnalisés et applications web", 
        icon: <FaLaptopCode size={40} />
    },
    { 
        name: "Support Technique", 
        description: "Assistance technique rapide et efficace", 
        icon: <FaHeadset size={40} />
    },
    { 
        name: "Gestion de Projets", 
        description: "Gestion complète de vos projets informatiques", 
        icon: <FaProjectDiagram size={40} />
    },
    { 
        name: "Développement de Fonctionnalités", 
        description: "Création de solutions sur mesure adaptées à vos besoins spécifiques", 
        icon: <FaCogs size={40} />
    },
    { 
        name: "Gestion de Stock", 
        description: "Solutions de gestion de stock pour optimiser votre inventaire", 
        icon: <FaWarehouse size={40} />
    },
    { 
        name: "Consultation UX/UI", 
        description: "Amélioration de l'expérience utilisateur et design d'interface", 
        icon: <FaChalkboardTeacher size={40} />
    },
    { 
        name: "Référencement SEO", 
        description: "Optimisation pour les moteurs de recherche pour plus de visibilité", 
        icon: <FaSearch size={40} />
    },
    { 
        name: "Maintenance de Site Web", 
        description: "Mise à jour et support pour assurer le bon fonctionnement de votre site", 
        icon: <FaWrench size={40} />
    },
];

const Service: React.FC = () => {
    return (
        <Fragment>
            <div className={`${s.Container} p-6`}    id="Services">
                <h2 className="text-3xl font-bold text-center mb-6">Nos Services</h2>
                <div className={`${s.ServiceGrid}`}>
                    {
                        services.map((item, index) => (
                            <div key={index} className={`${s.ServiceCard} flex flex-col items-center p-6 shadow-lg rounded-lg`}>
                                <div className="mb-4">
                                    {item.icon}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            
        </Fragment>
    );
}

export default Service;
