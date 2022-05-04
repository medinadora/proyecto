const vehiculosController = require('../controllers/vehiculos.controllers');
 
module.exports = (app) =>{

    app.get('/vehiculos', vehiculosController.list);

    app.get('/vehiculos-filter', vehiculosController.listFilter);
    
    app.get('/vehiculo/find/:id', vehiculosController.getById );
    
    app.post('/vehiculo/create', vehiculosController.create);
    
    app.put('/vehiculo/update', vehiculosController.update);

    app.delete('/vehiculo/remove/:id', vehiculosController.remove)
}