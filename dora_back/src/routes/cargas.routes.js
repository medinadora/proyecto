const cargasController = require('../controllers/cargas.controllers');
 
module.exports = (app) =>{

    app.get('/cargas', cargasController.list);

    app.get('/cargas-filter', cargasController.listFilter);
    
    app.get('/carga/find/:id', cargasController.getById );
    
    app.post('/carga/create', cargasController.create);
    
    app.put('/carga/update', cargasController.update);

    app.delete('/carga/remove/:id', cargasController.remove)

} 