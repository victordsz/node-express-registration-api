
const express = require("express");

const app = express();

const PORT = process.env.POR || 3000;

app.use(express.json());

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Servidor rodando com sucesso!');

app.get('/', (req, res) => {
  res.send('Servidor rodando com sucesso!');
});
});

let cadastros = [];
let proximoId = 1;

function emailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarCadastro(cadastro) {
    const { nome, email,} = req.body;
    if (!nome || nome.length < 3) {
        return res.status(400).json({ error: "O nome é obrigatório e deve conter pelo menos 3 caracteres." });
    }
    if (!email || !emailValido(email)) {
        return res.status(400).json({ error: "O email é obrigatório e deve ser um email válido." });
    }

    next();
}

app.get("/cadastros", (req, res) => {
  res.json(cadastros);
});

app.post("/cadastros", (req, res) => {
  const { nome, email, mensagem} = req.body;
  const novoCadastro = {
    id: proximoId++,
    nome,
    email,
    mensagem: mensagem||null
  };
  cadastros.push(novoCadastro);
  res.status(201).json(novoCadastro);
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
