const cool = require("cool-ascii-faces");
/*console.log(cool());*/

const express = require("express");

const app = express();
const port = process.env.PORT || 8081;  /*servidor para abrirlo en un entorno (hay que definir una variable de entorno) y si no la uso en un entorno pues abre el 8081 en navegador*/

app.use("/",express.static('public'));

app.get("/cool", (req,res)=>{
    console.log("Requested / route");
    res.send("<html><body><h1>"+cool()+"</h1></body></html>")
});
/**/ 
app.get("/time", (req,res)=>{
    console.log("Requested / route");
    res.send("<html><body><h1>"+new Date()+"</h1></body></html>")
});

app.listen(port, () => {

console.log(`Server ready at port ${port}`);
});


