import React, { FormEvent } from "react";
import {useState} from "react";
import { Fragment } from "react";
import s from "./contact.module.css";

const Contact: React.FC = ()=>{
    //Etat de configuration des champs du formulaier
    const [name,setName] = useState<string>('');
    const [mail,setMail] = useState<string>('');
    const [message,setMessage] = useState<string>('');

    //Etat pour gerer les erreurs et les status
    const [errors,setErrors] = useState<any>({});

    const handleName = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value);
    }

    const handleMail = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setMail(e.target.value);
    }
    
    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setMessage(e.target.value);
    }

    // S'assure que tous les champs sont valides
    const validate = () => {
        const newErrors: any = {};

        if(!name.trim()){
            newErrors.name = "Le champ nom est requis";
        }
        if(!mail.trim()){
            newErrors.mail = "Le champ mail est requis"
        }else if(!/^[a-zA-Z]+@[a-zA-z]+\.[a-zA-z]/.test(mail)){
            newErrors.mail = "L'email est invalide";
        }
        if(!message.trim()){
            newErrors.message = "Le champ message est requis";
        }
        //retourne un objet qui contient les evenetuels erreuers de chaque champs
        return newErrors;
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const formData = {name,mail,message};
        const validationErrors = validate(); 
        //Mets à jour l'etat des erreurs 
        setErrors(validationErrors);
        
        // Si l'objet n'est pas vide(Contient des erreurs liée au champ) ,alors on sort de la fonction 
        if(Object.keys(validationErrors).length > 0){
            return;
        }
       
        fetch("http://localhost:3000/contact",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(res => res.json())
        .then(data => console.log("Les données envoyées sont : ",data))
        .catch((err)=>console.error("Erreur lors de l'envoie des données",err));


        setName("");
        setMail("");
        setMessage("");
    }

    
    return(
        <Fragment >
            <div className={s.infoContainer}>
                <div style={{
                    display:"flex",
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:45
                }}>
                    <h1 className='font-bold text-3xl text-white'>POUR PLUS D'INFORMATIONS</h1>
                    <h5 className='font-semibold text-white'>N'hesitez pas à nous contacter pour un devis</h5>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className={s.formContainer}>
                        <div className={s.inputContainer}>
                            <input type="text" 
                                    placeholder="Nom" 
                                    onChange={handleName}
                                    value={name}  
                                    className={`${s.inputField} p-2 border rounded-sm font-bold text-white placeholder`}     
                            />
                            <input type="text" 
                                    placeholder="Email"
                                    onChange={handleMail}
                                    value={mail}   
                                    className={`${s.inputField} p-2 border rounded-sm font-bold text-white `}     
                            />
                            
                        </div>
                        {Object.keys(errors).length > 0 ?
                            <div className='mt-1 mb-1'>
                                <p className='text-red-500 text-xs'>{errors.name}</p>
                                <p className='text-red-500 text-xs'>{errors.mail}</p>
                                <p className='text-red-500 text-xs'>{errors.message}</p>
                            </div>: null}
                        <textarea  
                            onChange={handleMessage}
                            value={message}
                            className={`${s.messageField} mt-3 p-1 rounded-sm font-bold text-white`}
                            placeholder="message" 
                            rows={4} 
                            cols={49}>  
                        </textarea>

                        <input type="submit" value="Envoyer" 
                            className={`${s.submitField} pr-10 pl-10 pb-1 pt-1 mt-3 rounded-sm font-bold text-white self-end`} />
                    </div>
                </form>
            </div>
        </Fragment>
    );

}

export default Contact;