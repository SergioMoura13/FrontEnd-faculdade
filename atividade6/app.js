const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/views' });
});

app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, dataAgendamento } = req.body;

  if (!nome || !endereco || !telefone || !dataAgendamento) {
    // Redireciona para a página de dados com um parâmetro de erro
    res.redirect('/dados?erro=1');
  } else {
    // Redireciona para a página de dados com os parâmetros preenchidos
    res.redirect(`/dados?nome=${nome}&endereco=${endereco}&telefone=${telefone}&dataAgendamento=${dataAgendamento}`);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
