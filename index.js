const express = require('express');
const app = express();

app.use(express.json());

//criar um array chamado "pessoas"

let pessoas = [
    { id: 1, nome: 'anna', idade: 15, corfavorita: 'vermelho' },
    { id: 2, nome: 'laura', idade: 14, corfavorita: 'rosa' },
    { id: 3, nome: 'evilyn', idade: 16, corfavorita: 'branco' },
    { id: 4, nome: 'giovana', idade: 14, corfavorita: 'roxo' },
    { id: 5, nome: 'yasmin', idade: 15, corfavorita: 'vermelho' },
]
app.get('/', (req, res) => {           //1
    res.json({ mensagem: 'API de pessoas funcionando' });
});
app.get('/pessoas', (req, res) => {
    res.json(pessoa);

});

app.post("/pessoa", (req, res) => {      //2
    const { nome, idade } = req.body;
    const newUser = {
        id: pessoas.length + 1,
        nome,
        idade,
    };
    console.log("novos dados:", newUser)
    pessoas.push(newUser);
    res.status(201).json(newUser);
})
//api do tipo get para buscar uma pessoa so por id
//rota: http://localhost:3000/pessoas

app.get("/pessoa/:id", (req, res) => {  //3
    const id = parseInt(req.params.id);
    const pessoa = pessoa.find(u => u.id === id);

    if (!pessoa) {
        return res.status(404).json({ error: "pessoa não encontrado" });
    }
    res.json(pessoa);
});

// endpoint do tipo PUT/PATCH rota
app.put('/pessoas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log("ID", id)
    const pessoa = pessoas.find(u => u.id === id);
    console.log("PESSOA:", pessoas)

    if (!pessoa) {
        return res.status(404).json({ error: "pessoa não encontrado" });
    }
    const novaPessoa = req.body;
    console.log(" ANTIGA PESSOA:", pessoa)
    console.log("NOVA PESSOA:", novaPessoa)

    pessoa.nome = novaPessoa.nome
    pessoa.corfavorita = novaPessoa.corfavorita
    pessoa.idade = novaPessoa.idade
    pessoas[pessoa.id - 1] = pessoa

    console.log("PESSOAS:", pessoas)
    res.json(pessoas);
})
////////////////////// end point do tipo delete///////////

app.delete('/pessoas/:id', (req, res) => {
    const idPessoa = parseInt(req.params.id); // Converte o ID para número
    const index = pessoas.findIndex(pessoas => pessoas.id === idPessoa);

    if (index !== -1) {
        pessoas.splice(index, 1); // Remove a pessoa da lista
        res.status(200).json({ message: `Pesssoa com ID ${idPessoa} excluído com sucesso.` }); // Retorna sucesso
    } else {
        res.status(404).json({ message: `Pessoa com ID ${idPessoa} não encontrado.` }); // Retorna não encontrado
    }
});









const PORT = 3000;
app.listen(PORT, () => {

    console.log(`servidor rodando em http://localhost:${PORT}`);

});
