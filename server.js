const express= require("express");
const app= express();
app.set("trust proxy", true) ;
app.get("/", (req,res)=> { console.log("Visita:", new Date().toISOString(), "IP:", req.ip, "Dispositivo:", req.get("user-agent"), res.send('<h1 style="font-size:60px;">TU IP FOR MY</h1>'); });
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0");
