const express= require("express");
const app= express();
app.set("trust proxy", true) ;
app.use(express.static(__dirname));
app.get("/", (req,res)=> { console.log("Visita:", new Date().toISOString(), "IP:", req.ip, "Dispositivo:", req.get("user-agent")); res.send(`<title>TU IP FOR MY</title><body style="margin:0;background:black;"><div style="position:fixed;left:20px;top:150px;width:180px;height:400px;z-index:9999;background:#24292f;display:flex;align-items:center;justify-content:center;"><a href="https://github.com" target="_blank" style="color:white;background-image:url('/github-banner.jpg');background-size:cover;background-position:center;padding:12px 18px;border-radius:8px;text-decoration:none;font-family:Arial,sans-serif;font-weight:bold;""GitHub</a></div><h1 style="font-size:6vw;margin:0;color:white;text-align:center;font-family:Georgia,serif;">TU IP FOR MY</h1><p style="font-size:3vw;margin:0;text-align:center;color:white;text-align.center;font-family:monospace;">TU IP: ${req.ip}</p><img src="/MI%20AMIGO.jpg" style="max-width:90%;height:auto;display:block;margin:0 auto;"></body>`); });
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0");
