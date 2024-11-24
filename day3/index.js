const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));
app.get("/",(req ,res)=>{
   res.render("home.ejs");
});
//app.get("/hello",(req,res)=>{
   // res.send("hello");
//})
app.get("/ig/:username",(req ,res )=>{
     const followers= ["admin","saraj","nisha"];
    let {username}= req.params;
    res.render("instagram.ejs",{username,followers});
});

app.listen(port,() => {
    console.log( ` listening on port ${port}`);
});
app.get("/rolldice",(req,res)=>{
    let dicevalue= Math.floor(Math.random()* 6 ) +1
    res.render("rolldice.ejs");
});