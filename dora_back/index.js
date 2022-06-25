const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require("cors");
//const upload = require({ dest: "upload/"});


const app = express();
app.use(bodyParser.json());
app.use(cors());

//req=request- parametros
//res=response-resultados

require('./src/routes/cargas.routes')(app);
require('./src/routes/usuarios.routes')(app);
require('./src/routes/vehiculos.routes')(app);
require('./src/routes/prueba.routes')(app);
require('./src/routes/roles.routes')(app);


app.listen(3000, () => console.log("listening on port 3000") ) ;