const vehiculosController = require('../controllers/vehiculos.controllers');
 
module.exports = (app) =>{

    app.get('/vehiculos', vehiculosController.list);

    app.get('/vehiculos-filter/:q', vehiculosController.listFilter);
    
    app.get('/vehiculos/find/:id', vehiculosController.getById );
    
    app.post('/vehiculos/create', vehiculosController.create);
    
    app.put('/vehiculos/update/:id', vehiculosController.update);

    app.delete('/vehiculos/remove/:id', vehiculosController.remove)
}