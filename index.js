const express = require("express");
const backend = required("./src/back");

const port = process.env.PORT || 8081;  /*servidor para abrirlo en un entorno (hay que definir una variable de entorno) y si no la uso en un entorno pues abre el 8081 en navegador*/

const app = express();
backend(app);

app.listen(port, () => {
    console.log(`Server ready at port ${port}`);
});


