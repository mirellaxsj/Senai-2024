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
router.delete('/destinos/:id', destinos.remove);
router.put('/destinos/', destinos.update);


//Hoteis
router.post('/hoteis', hoteis.create);
router.get('/hoteis', hoteis.read);
router.delete('/hoteis/:id', hoteis.remove);
router.put('/hoteis/', hoteis.update);


//Pontos Turisticos
router.post('/pontosTuristicos', pontosTuristicos.create);
router.get('/pontosTuristicos', pontosTuristicos.read);
router.delete('pontosTuristicos/:id', pontosTuristicos.remove);
router.put('/pontosTuristicos/', pontosTuristicos.update);

module.exports = router;
