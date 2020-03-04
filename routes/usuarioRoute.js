const express = require('express');

let route = express.Router();

route.get('/:nome', (req, res) => {
    //let nomeDigitado = res.params.nome;       (jeito feio)
    let {nome} = req.params;                    //(jeito melhor)
    res.send(`Seja bem vindo ${nome}`);
})
module.exports = route;