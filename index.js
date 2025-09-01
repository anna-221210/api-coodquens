const express = require ('express');
const app = express();

app.use(express.json());

//criar um array chamado "pessoas"
let pessoas =[
    { nome:'anna', idade: 15, corfavorita: 'vermelho'},
    { nome:'laura', idade: 14, corfavorita: 'rosa'},
    { nome:'evilyn', idade: 16, corfavorita: 'branco'},
    { nome:'giovana', idade: 14, corfavorita: 'roxo'},
    { nome:'yasmin', idade: 15, corfavorita: 'vermelho'},
]
app.get('/', (req,res)=> {
    res.json({mensagem: 'API de pessoas funcionando'});
});
app.get('/pessoas', (req,res)=> {
    res.json(pessoas);
});

const PORT = 3000;
app.listen(PORT,() => {

       console.log(`servidor rodando em http://localhost:${PORT}`);

});
