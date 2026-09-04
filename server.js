const express= require("express");
const app= express();
app.set("trust proxy", true) ;
app.get("/", (req,res)=> { console.log("Visita:", new Date().toISOString(), "IP:", req.ip); res.send("hola mundo"); });
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0");
