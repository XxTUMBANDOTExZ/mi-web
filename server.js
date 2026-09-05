const express= require("express");
const app= express();
app.set("trust proxy", true) ;
app.use(express.static(__dirname));
app.get("/", (req,res)=> { console.log("Visita:", new Date().toISOString(), "IP:", req.ip, "Dispositivo:", req.get("user-agent")); res.send(`<title>TU IP FOR MY</title><body style="background-color:black;"></div><h1 style="font-size:6vw;margin:0;color:white;text-align:center;font-family:Georgia,serif;">TU IP FOR MY</h1><p style="color:#00ff88;font-family:monospace;text-align:center;">
  > system online_
</p><p style="font-size:3vw;margin:0;text-align:center;color:white;text-align.center;font-family:monospace;">TU IP: ${req.ip}</p><img src="/MI%20AMIGO.jpg"
style="max-width:90%;height:auto;display:block;margin:20px auto;border:2px solid #00ff88;border-radius:12px;">

<div style="text-align:center;color:white;margin-top:25px;">

  <h2 style="color:#00ff88;font-family:monospace;">
    Aprende sobre hacking e informática
  </h2>

  <p style="font-family:monospace;color:#cccccc;">
    Contenido de ciberseguridad, tecnología y aprendizaje.
  </p>

  <a href="https://youtube.com/@tu-ip-for-my?si=b62ENd_f5SitoJLQ"
  target="_blank"
  style="
  display:inline-block;
  margin:10px;
  padding:12px 20px;
  background:#ff0000;
  color:white;
  text-decoration:none;
  border-radius:8px;
  font-family:Arial;
  font-weight:bold;
  ">
    ▶ Canal de YouTube
  </a>

  <br>

  <a href="https://www.tiktok.com/@tuipformy?_r=1&_t=ZG-99TuRKF37vV"
  target="_blank"
  style="
  display:inline-block;
  margin:10px;
  padding:12px 20px;
  background:#111111;
  color:white;
  text-decoration:none;
  border:1px solid white;
  border-radius:8px;
  font-family:Arial;
  font-weight:bold;
  ">
    ♪ Canal de TikTok
  </a>

  <div style="
  margin:40px auto 20px auto;
  max-width:600px;
  padding:20px;
  border:1px solid #00ff88;
  border-radius:10px;
  font-family:monospace;
  ">

    <h3 style="color:#00ff88;">Sobre este proyecto</h3>

    <p style="color:#dddddd;">
      TU-IP-FOR-MY es una página creada para aprender sobre informática,
      redes y ciberseguridad de forma educativa.
    </p>

  </div>

  <p style="
  margin-top:40px;
  color:#777777;
  font-family:monospace;
  font-size:14px;
  ">
    TU-IP-FOR-MY © 2026
  </p>

</div>

</body>`); });
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0");
