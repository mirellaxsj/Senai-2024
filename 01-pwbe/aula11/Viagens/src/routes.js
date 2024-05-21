const express = require('express');

const router = express.Router();

const destinos = require('./controllers/destinos');
const hoteis = require('./controllers/hoteis');
const pontosTuristicos = require('./controllers/pontosTuristicos');

router.get('/', (req, res) => {
    res.send('Hello World').end();
});

//Destinos
router.post('/destinos', destinos.create);
router.get('/destinos', destinos.read);
router.get('/destinos/id/:id', destinos.readById);
router.get('/destinos/cidade/:cidade', destinos.readByCidade);
router.delete('/destinos/id/:id', destinos.remove);
router.put('/destinos/id/:id', destinos.update);


//Hoteis
router.post('/hoteis', hoteis.create);
router.get('/hoteis', hoteis.read);
router.delete('/hoteis/:id', hoteis.remove);
router.put('/hoteis/:id', hoteis.update);


//Pontos Turisticos
router.post('/pontosTuristicos', pontosTuristicos.create);
router.get('/pontosTuristicos', pontosTuristicos.read);
router.delete('/pontosTuristicos/:id', pontosTuristicos.remove);
router.put('/pontosTuristicos/:id', pontosTuristicos.update);

module.exports = router;
