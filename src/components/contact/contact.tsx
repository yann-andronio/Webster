import React from "react";
import {useState} from "react";
import { Fragment } from "react";
import s from "./contact.module.css";

const Contact: React.FC = ()=>{
    //Etat de configuration des champs du formulaier
    const [name,setName] = useState<string>('');
    const [mail,setMail] = useState<string>('');
    const [message,setMessage] = useState<string>('');

    //Etat pour gerer les erreurs et les status
    const [errors,setErrors] = useState({});

    const handleName = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value);
    }

    const handleMail = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setMail(e.target.value);
    }
    
    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setMessage(e.target.value);
    }

    const validate: any = () => {
        const newErrors: any = {};

        if(!name.trim()){
            newErrors.name = "Le champ nom est requis"    
        }
        if(!mail.trim()){
            newErrors.mail = "Le champ mail est requis"
        }else if(!/\S+@\S+\.\S+/.test(mail)){
            newErrors.mail = "L'email est invalide"
        }

        if(!message.trim()){
            newErrors.message = "Le champ message est requis"
        }

        return newErrors;

    }

    const handleSubmit = async (e:any)=>{
        e.preventDefault();
        const validationErrors = validate();

        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
            return;
        }
        //Reinitiliser les erreurs liée à la soumission des champs
        setErrors({});

        const dataForm = {name,mail,message}

        try{
            const response = await fetch("http://localhost:3000/contact", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataForm)
            });


            if(response.ok){

                setName("");
                setMail("");
                setMessage("");
            }
        }catch(err){
            console.error("Erreur lors de la soumission du formulaire :",err);
           
        }

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
                                    className={`${s.inputField} p-2 border rounded-sm font-bold text-white placeholder-gray-200`}     
                            />
                            <input type="text" 
                                    placeholder="Email"
                                    onChange={handleMail}
                                    value={mail}   
                                    className={`${s.inputField} p-2 border rounded-sm font-bold text-white placeholder-gray-200`}     
                            />
                        </div>
                        <textarea  
                            onChange={handleMessage}
                            value={message}
                            className={`${s.messageField} mt-3 p-1 rounded-sm font-bold text-white placeholder-gray-200`}
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