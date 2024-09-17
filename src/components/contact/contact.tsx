import React from "react";
import {useState} from "react";
import { Fragment } from "react";
import s from "./contact.module.css";

const Contact: React.FC = ()=>{
    const [name,setName] = useState<string>('');
    const [mail,setMail] = useState<string>('');
    const [message,setMessage] = useState<string>('');

    const handleName = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value);
    }

    const handleMail = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setMail(e.target.value);
    }
    
    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setMessage(e.target.value);
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

                <form action="">
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