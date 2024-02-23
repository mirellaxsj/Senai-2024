//Dependências - Frameworks
const express = require("express");
const router = express.Router();

const item = require("./controllers/item");

//Rota de teste
const teste = (req, res) => {
    res.json("Back-end, API Inventário respondendo!");
}

//Rotas de Saída - Clientes
router.get("/", teste);
router.post("/itens", item.create);
router.get("/itens", item.read);
router.put("/itens/:id", item.update);
router.delete("/itens/:id", item.del);

module.exports = router;