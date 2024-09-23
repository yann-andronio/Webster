
const express = require("express");
//const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config()

const app = express();
const PORT = 3000;

//Gestion des middleWare
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())

app.post("/contact", async (req,res)=>{
    const {nom, mail, message } = req.body;

    if(!nom || !mail || !message){
        return res.status(400).json({message: 'Tous les champs sont exigées'})
    }

    //Configuration du transporteur 
    let transporteur = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVE_EMAIL,
        sujet: `demande de devis`,
        text: `Vous avez recu un nouveau message de ${nom} (${mail}) : ${message}`
    }

    try{
        await transporteur.sendMail(mailOptions)
        res.status(200).json({message: 'Votre message a été envoyé avec succes !'})
    }catch(err){
        console.error("Erreur de l'envoie de l'email:",err);
        res.status(500).json({message: "Une erreur est survenue lors de l'envoie du message"})
    }
})


app.listen(PORT,()=>{
    try{
        console.log(`Le serveur a demarré sur le port ${PORT}`);
    }catch(err){
        console.error(`Erreur lors du démarrage du serveur`);
    }
})

