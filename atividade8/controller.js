exports.calcular = (req, res) => {
    const { numeroA, numeroB, operacao } = req.body;
    let resultado;
  
    switch (operacao) {
      case '+':
        resultado = parseFloat(numeroA) + parseFloat(numeroB);
        break;
      case '-':
        resultado = parseFloat(numeroA) - parseFloat(numeroB);
        break;
      case '*':
        resultado = parseFloat(numeroA) * parseFloat(numeroB);
        break;
      case '/':
        resultado = parseFloat(numeroA) / parseFloat(numeroB);
        break;
      default:
        resultado = 'Operação inválida';
    }
  
    res.send(`
      <h1>Resultado: ${resultado}</h1>
      <a href="/">Realizar novo cálculo</a>
    `);
  };
  