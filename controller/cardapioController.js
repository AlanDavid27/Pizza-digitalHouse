const Cardapio = require("../models/Cardapio");

let cardapioController={
    listarCardapio: (req, res)=>{
        let listaPizza= Cardapio.listarCardapio();
        res.send(listaPizza);

    }

}

module.exports= cardapioController