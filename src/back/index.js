module.exports = (app) =>{
    
    app.get("/api", (req,res)=>{
        console.log("Requested / route");
        res.send({result:true});
    });
}