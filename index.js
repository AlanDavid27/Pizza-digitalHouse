const express = require('express');

let rotasUsuario = require('./routes/usuarioRoute')
let rotasCardapio = require('./routes/cardapioRoute')

let app = express();

app.get('/', (req, res) => {
    res.send("Você está no sistema pizzaria DH");

})


//aqui usamos a rota que importamos
app.use('/usuarios', rotasUsuario);
app.use('/cardapio', rotasCardapio);



app.listen(3000, ()=> console.log("servidor ativo"));