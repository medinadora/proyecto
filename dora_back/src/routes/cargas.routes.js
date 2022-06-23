const cargasController = require('../controllers/cargas.controllers');
 
module.exports = (app) =>{

    app.get("/cargas", cargasController.list);
    app.get("/cargas-filter/:q", cargasController.listFilter);
    app.get("/cargas/find/:id", cargasController.getById );
    app.post("/cargas/create", cargasController.create);
    app.put("/cargas/update/:id", cargasController.update);
    app.delete("/cargas/remove/:id", cargasController.remove)

} 
    
