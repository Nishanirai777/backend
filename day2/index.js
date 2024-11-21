const express = require("express");
const app = express();
//console.log(app);
let port = 8080;
app.listen( port , ()=>{
    console.log(`app is listening on port ${port}`);
});
app.use((req, res)=>{
    //console.log(req);
    console.log("request received");
    
    let code = "<h1> Fruits</h1> <ul><li>apple</li> <li>orange</li></ul>";
    res.send(code);
});