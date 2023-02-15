import express from "express";

const app = express();

app.use(express.json())

const jogos =[
    {id: 1, "titulo": "zelda"},
    {id: 2, "titulo": "mega man"}
]

app.get('/', (req, res) => {
    res.status(200).send('lista de jogos')
})

app.get('/jogos', (req, res) => {
    res.status(200).json(jogos);
})

app.post('/jogos', (req, res)=>{
    jogos.push(req,body);
    res.status(201).send('jogos cadrastado com sucesso')
})

export default app