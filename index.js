const express = require ('express');
const app = express();

app.use(express.json());

//criar um array chamado "pessoas"

let pessoas =[
    { id:1, nome:'anna', idade: 15, corfavorita: 'vermelho'},
    {id :2, nome:'laura', idade: 14, corfavorita: 'rosa'},
    { id:3,nome:'evilyn', idade: 16, corfavorita: 'branco'},
    { id:4,nome:'giovana', idade: 14, corfavorita: 'roxo'},
    { id:5,nome:'yasmin', idade: 15, corfavorita: 'vermelho'},
]
app.get('/', (req,res)=> {
    res.json({mensagem: 'API de pessoas funcionando'});
});
app.get('/pessoas', (req,res)=> {
    res.json(pessoa);
    
});

app.post("/pessoa",(req,res) => {
        const{nome,idade} = req.body;
        const newUser ={
            id: pessoas.length +  1,
            nome,
            idade,
        };
        console.log("novos dados:", newUser)
        pessoas.push(newUser);
        res.status(201).json(newUser);
    })
    //api do tipo get para buscar uma pessoa so por id
    //rota: http://localhost:3000/pessoas

    app.get("/pessoa/:id",(req,res)=>{
        const id = parseInt(req.params.id);
        const pessoa = pessoa.find (u =>u.id===id);

        if(!pessoa){
            return res.status(404).json({ error: "pessoa não encontrado"});
        }
        res.json (pessoa);
    });
const PORT = 3000;
app.listen(PORT,() => {

       console.log(`servidor rodando em http://localhost:${PORT}`);

});
