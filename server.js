const express= require("express");
const app= express();
app.set("trust proxy", true) ;
app.use(express.static(__dirname));
app.get("/", (req,res)=> { console.log("Visita:", new Date().toISOString(), "IP:", req.ip, "Dispositivo:", req.get("user-agent")); res.send(`<title>TU IP FOR MY</title></div><h1 style="font-size:6vw;margin:0;color:white;text-align:center;font-family:Georgia,serif;">TU IP FOR MY</h1><p style="font-size:3vw;margin:0;text-align:center;color:white;text-align.center;font-family:monospace;">TU IP: ${req.ip}</p><img src="/MI%20AMIGO.jpg" style="max-width:90%;height:auto;display:block;margin:0 auto;"></body>`); });
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0");
