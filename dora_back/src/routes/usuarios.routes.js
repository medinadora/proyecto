const usuarioController = require("../controllers/usuarios.controllers");
const authorizationMiddleware = require("../middleware/authorization.middleware");
module.exports = (app) => {
  app.get("/usuarios",usuarioController.list);

  app.get("/usuarios-filter/:q",  usuarioController.listFilter);

  app.get("/usuarios/find/:id",  usuarioController.getById);

  app.post("/usuarios/create", usuarioController.create);

  app.put("/usuarios/update/:id", usuarioController.update);

  app.delete("/usuarios/remove/:id", usuarioController.remove);

  app.post("/usuarios/login", usuarioController.login);
  app.post("/usuarios/logout",authorizationMiddleware.authorization, usuarioController.logout);
};
