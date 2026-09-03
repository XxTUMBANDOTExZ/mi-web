const express= require("express");
const app= express();
app.get("/", (req,res)=> { console.log("IP visitante:", req.ip); res.send("hola mundo"); });
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0");