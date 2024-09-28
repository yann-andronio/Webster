const express = require("express");

const app = express();
const PORT = 3050;
const nodemailer = require("nodemailer");



nodemailer.createTestAccount((err,account)=>{
    if(err){
        console.error("Erreur lors de la creation du compte");
        return process.exit(1);
    }

    console.log("Creation du compte,envoie du message");
    const transporteur = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass
        }
    })

    const mailOptions = {
        from: 'guerraiannis@gmail.com',
        to: 'guerraiannis@gmail.com',
        subject: 'test nodemailer',
        text: 'Nodemailer'
    }

    transporteur.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.error("Une erreur s'est produite",err);
            return process.exit(1);
        }

        console.log("Message envoyé :",info.messageId);
        console.log("Preview URL:",nodemailer.getTestMessageUrl(info)); 
    })
})

app.listen(PORT,()=>{
    try{
        console.log(`Connexion au serveur établie sur le port ${PORT}`);
    }catch(err){
        console.error("Impossible de se connecter au serveur");
    }
})