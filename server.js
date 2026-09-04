const express= require("express");
const app= express();
app.set("trust proxy", true) ;
app.use(express.static(__dirname));
app.get("/", (req,res)=> { console.log("Visita:", new Date().toISOString(), "IP:", req.ip, "Dispositivo:", req.get("user-agent")); res.send(`<body style="margin:0;min-height:100vh;background:black url('/MI%20AMIGO.jpg') center/contain no-repeat;"><h1 style="font-size:60px;color:white;text-align:center;font-family:Georgia,serif;">TU IP FOR MY</h1><p style="font-size:28px;color:white;text-align.center;font-family:monospace;">TU IP: ${req.ip}</p></body>`); });
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0");
