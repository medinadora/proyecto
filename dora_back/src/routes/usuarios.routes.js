const usuariosController = require('../controllers/usuarios.controllers');
 
module.exports = (app) =>{

    app.get('/usuarios', usuariosController.list);

    app.get('/usuarios-filter', usuariosController.listFilter);
    
    app.get('/usuario/find/:id', usuariosController.getById );
    
    app.post('/usuario/create', usuariosController.create);
    
    app.put('/usuario/update', usuariosController.update);

    app.delete('/usuario/remove/:id', usuariosController.remove)

} 