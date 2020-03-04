const express = require('express');
const cardapioController = require('../controller/cardapioController')
let route = express.Router();

route.get('/cadastra/:pizza/:preco', (req, res) => {
    
    res.send(`Pizza cadastrada`);
})
route.get('/ver',cardapioController.listarCardapio)


module.exports = route;