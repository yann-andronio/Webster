
const express = require("express");
//const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

//Gestion des middleWare
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.listen(PORT,()=>{
    try{
        console.log(`Le serveur a demarré sur le port ${PORT}`);
    }catch(err){
        console.error(`Erreur lors du démarrage du serveur`);
    }
})

