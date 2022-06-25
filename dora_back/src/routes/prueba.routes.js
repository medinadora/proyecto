const pruebasController = require('../controllers/prueba.controllers');
 
module.exports = (app) =>{

    app.get("/pruebas", pruebasController.list);
    app.get("/pruebas-filter/:q", pruebasController.listFilter);
    app.get("/pruebas/find/:id", pruebasController.getById );
    app.post("/pruebas/create", pruebasController.create);
    app.put("/pruebas/update/:id", pruebasController.update);
    app.delete("/pruebas/remove/:id", pruebasController.remove)

} 
  