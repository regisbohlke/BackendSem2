
const express = require("express");

const app = express();
const PORT = 3030;

// Página inicial
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Catálogo de Heróis</title>
        </head>
        <body>
            <h1>Catálogo de Heróis</h1>

            <p>Bem-vindo ao catálogo de heróis da Marvel e da DC!</p>

            <h2>Empresas</h2>
            <ul>
                <li><a href="/marvel">Marvel</a></li>
                <li><a href="/dc">DC Comics</a></li>
            </ul>

            <hr>

            <h2>Personagens</h2>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/marvel/Homem-Aranha">Homem-Aranha</a></li>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
            </ul>
        </body>
        </html>
    `);
});

// Rota da Marvel
app.get("/marvel", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Marvel</title>
        </head>
        <body>
            <h1>Marvel</h1>

            <p>A Marvel é uma empresa conhecida por seus
            super-heróis e histórias em quadrinhos.</p>

            <h2>Personagens</h2>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/marvel/Homem-Aranha">Homem-Aranha</a></li>
                <li><a href="/personagem/marvel/Homem-de-Ferro">Homem de Ferro</a></li>
            </ul>

            <a href="/">Voltar à página inicial</a>
        </body>
        </html>
    `);
});

// Rota da DC
app.get("/dc", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>DC Comics</title>
        </head>
        <body>
            <h1>DC Comics</h1>

            <p>A DC Comics é uma editora conhecida por personagens
            como Batman, Superman e Mulher-Maravilha.</p>

            <h2>Personagens</h2>
            <ul>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
                <li><a href="/personagem/dc/Mulher-Maravilha">Mulher-Maravilha</a></li>
            </ul>

            <a href="/">Voltar à página inicial</a>
        </body>
        </html>
    `);
});

// Rota com dois parâmetros
app.get("/personagem/:empresa/:nome", (req, res) => {
    const empresa = req.params.empresa;
    const nome = req.params.nome;

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>${nome} - Catálogo de Heróis</title>
        </head>
        <body>
            <h1>Informações do Personagem</h1>

            <p><strong>Empresa:</strong> ${empresa}</p>
            <p><strong>Personagem:</strong> ${nome}</p>

            <a href="/${empresa.toLowerCase()}">Ver empresa</a>
            <br><br>
            <a href="/">Voltar à página inicial</a>
        </body>
        </html>
    `);
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
