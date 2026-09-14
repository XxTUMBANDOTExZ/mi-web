const express= require("express");
const app= express();
app.set("trust proxy", true) ;
app.use(express.static(__dirname));
app.get("/", (req,res)=> { console.log("Visita:", new Date().toISOString(), "IP:", req.ip, "Dispositivo:", req.get("user-agent")); res.send(`<title>TU IP FOR MY</title><body style="background-color:black;"><style>.typing {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: typing 2s steps(15, end) forwards;
}

@keyframes typing {
  from { width: 0; }
  to { width: 15ch; }
}
.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
</style><h1 style="font-size:6vw;margin:0;color:white;text-align:center;font-family:Georgia,serif;">TU IP FOR MY</h1><p style="color:#00ff88;font-family:monospace;text-align:center;">
  <span class="typing">&gt; system online</span><span class="cursor">_</span>
<p style="color:#00ff88;font-family:monospace;text-align:center;font-size:14px;">
  STATUS: ONLINE
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
  <div style="
margin:40px auto 20px auto;
max-width:600px;
padding:20px;
border:1px solid #00ff88;
border-radius:10px;
font-family:monospace;
text-align:center;
">

  <div style="
margin:40px auto 20px auto;
max-width:900px;
padding:20px;
border:1px solid #00ff88;
border-radius:10px;
font-family:monospace;
text-align:center;
">

  <h3 style="color:#00ff88;">Últimos vídeos</h3>

  <div style="
  display:flex;
  flex-wrap:wrap;
  gap:20px;
  justify-content:center;
  ">

    <div style="
    flex:1 1 300px;
    max-width:400px;
    border:1px solid #333;
    border-radius:10px;
    padding:15px;
    ">

      <img
      src="https://img.youtube.com/vi/atVsVq8W4Js/hqdefault.jpg"
      style="width:100%;border-radius:8px;"
      alt="Miniatura vídeo IP">

      <h4 style="color:white;">
        ¿Qué es una dirección IP?
      </h4>

      <a
      href="https://youtu.be/atVsVq8W4Js"
      target="_blank"
      style="
      display:inline-block;
      padding:10px 18px;
      background:#00ff88;
      color:black;
      text-decoration:none;
      border-radius:6px;
      font-weight:bold;
      ">
        Ver vídeo
      </a>

    </div>

    <div style="
    flex:1 1 300px;
    max-width:400px;
    border:1px solid #333;
    border-radius:10px;
    padding:15px;
    ">

      <img
      src="https://img.youtube.com/vi/Sa8Jq06ziIY/maxresdefault.jpg"
      style="width:100%;border-radius:8px;"
      alt="Miniatura vídeo VPN">

      <h4 style="color:white;">
        Cómo ocultar tu IP con una VPN
      </h4>

      <a
      href="https://youtu.be/Sa8Jq06ziIY"
      target="_blank"
      style="
      display:inline-block;
      padding:10px 18px;
      background:#00ff88;
      color:black;
      text-decoration:none;
      border-radius:6px;
      font-weight:bold;
      ">
        Ver vídeo
      </a>

    </div>

  </div>

</div>

  

<div style="
margin:40px auto;
max-width:1000px;
padding:20px;
border:1px solid #00ff88;
border-radius:10px;
font-family:monospace;
text-align:center;
">

  <h2 style="color:#00ff88;">🌍 WI-FI MAP</h2>

  <p style="color:#cccccc;">
    Explora puntos Wi-Fi públicos alrededor del mundo
  </p>

  <select id="countrySelect" style="
padding:10px;
margin-bottom:15px;
border-radius:6px;
background:#111;
color:white;
border:1px solid #00ff88;
font-family:monospace;
width:100%;
max-width:350px;
">
  <option value="">Selecciona un país</option>
  <option value="ES">España</option>
  <option value="FR">Francia</option>
  <option value="IT">Italia</option>
  <option value="DE">Alemania</option>
  <option value="PT">Portugal</option>
  <option value="GB">Reino Unido</option>
  <option value="US">Estados Unidos</option>
  <option value="CA">Canadá</option>
  <option value="MX">México</option>
  <option value="BR">Brasil</option>
  <option value="AR">Argentina</option>
  <option value="CL">Chile</option>
  <option value="AU">Australia</option>
  <option value="JP">Japón</option>
  <option value="KR">Corea del Sur</option>
  <option value="IN">India</option>
  <option value="ZA">Sudáfrica</option>
</select><div id="wifiMap" style="
  width:100%;
  height:500px;
  border-radius:10px;
  overflow:hidden;
  "></div>

</div>

<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
/>

<script
  src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js">
</script>

<script>
  const wifiMap = L.map('wifiMap').setView([20, 0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
  }).addTo(wifiMap);

  L.marker([40.4168, -3.7038])
    .addTo(wifiMap)
    .bindPopup('<b>Ejemplo Wi-Fi</b><br>Madrid, España');
</script><p style="margin-top:40px;color:#777777;font-family:monospace;font-size:14px;">
  TU-IP-FOR-MY © 2026
</p>

</div>

</body>`); });
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0");
