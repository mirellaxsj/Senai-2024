const express = require("express");
const router = express.Router();

const usuarios = require("./controllers/usuarios");
const tarefas = require("/controllers/tarefas");

routes.get('/', (req, res) => {
    res.json("API Gerenciador de tarefas")
});

//Rotas de Saída - Clientes
router.post("/usuarios", usuarios.addUsuario);
router.get("/usuarios", usuarios.read);
router.put("/usuarios/:id", usuarios.update);
router.delete("/usuarios/:id", usuarios.del);

//Rotas de Saída - Tarefas
router.post("/tarefas", tarefas.create);
router.get("/tarefas", tarefas)

module.exports = router;