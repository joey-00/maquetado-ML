const express = require('express');
const path = require('path');
const port = 3030;

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')))
app.get('/login', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'login.html')))
app.get('/registro', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'registro.html')))
app.get('/misCompras', (req,res) => res.sendFile(path.resolve(__dirname, 'views', 'misCompras.html')))

app.listen(port, () => `servidor funcionando en http://localhost:$(port)`)
