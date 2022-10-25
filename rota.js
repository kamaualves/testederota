const express = require("express");
const rota = express();
const bodyParset = require("body-parser")
const Ponto = require("./concessionaria");
const { append } = require("express/lib/response");


rota.use(express.static("./"));

rota.use(bodyParset.urlencoded({extended: false}))
rota.use(bodyParset.json())

rota.get('/app' , function(req,res){
    res.sendFile(__dirname+ 'index.html');
});
rota.post('/pontoEntrada', function(req,res){
    ponto.create({
        dataPonto: req.body.dtentrada,
        tipoPonto: "Entrada",
        observacao: req.body.obs
    }).then(function(){
        res.redirect('/pontoEntrada')
    }).catch(function(erro){
        res.send("Erro: Ponto não foi registrado" + erro)
    })
})
rota.listen(3001, ()=>{
    console.log('Servidor iniciado')
});


