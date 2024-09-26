require('dotenv').config()
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

//Gestion des middleWare
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())


app.post("/contact",async (req,res) => {
    const {name,mail,message} = req.body;

    if(!name || !mail || !message){
        return res.send("Tous les champs sont requis")
    }
    const transporteur = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.EMAIL_RECEIVE,
            pass: process.env.EMAIL_PASS,
        }
    })

    //Configuration du contenue du mail
    const mailOptions = {
        from: mail,
        to: process.env.EMAIL_RECEIVE,
        subject: `Demande de devis de la part de ${name}`,
        text: message
    }

    //Send email here ...
    try{
         transporteur.sendMail(mailOptions);
         
        console.log("Mail envoyé avec succes:");
        console.log(`Nom: ${name} et mail: ${mail} et message: ${message}`);

        res.status(200).json({data: req.body});
    }catch(err){
        console.error("Erreur de l'envoie de l'email")
    }
})

app.get("/",(req,res)=>{
    res.send(`Serveur en écoute sur le port ${PORT}`);
    
})


app.listen(PORT,()=>{
    try{
        console.log(`Le serveur a demarré sur le port ${PORT}`);
    }catch(err){
        console.error(`Erreur lors du démarrage du serveur`);
    }
})

