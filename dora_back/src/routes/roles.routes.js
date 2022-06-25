const rolesController = require('../controllers/roles.controllers');
 
module.exports = (app) =>{

    app.get("/roles", rolesController.list);
    app.get("/roles-filter/:q", rolesController.listFilter);
    app.get("/roles/find/:id", rolesController.getById );
    app.post("/roles/create", rolesController.create);
    app.put("/roles/update/:id", rolesController.update);
    app.delete("/roles/remove/:id", rolesController.remove)

} 
  