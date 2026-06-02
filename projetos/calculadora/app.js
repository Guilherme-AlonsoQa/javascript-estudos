// Calculadora simples com JavaScript puro

let expressaoAtual = '';

const displayResultado = document.getElementById('resultado');
const displayExpressao = document.getElementById('expressao');

function inserir(valor) {
    if (expressaoAtual === '' && ['+', '*', '/', '%'].includes(valor)) return;
    expressaoAtual += valor;
    displayResultado.textContent = expressaoAtual;
}

function calcular() {
    if (expressaoAtual === '') return;
    try {
          displayExpressao.textContent = expressaoAtual + ' =';
          const resultado = eval(expressaoAtual);
          displayResultado.textContent = parseFloat(resultado.toFixed(10));
          expressaoAtual = String(parseFloat(resultado.toFixed(10)));
    } catch (erro) {
          displayResultado.textContent = 'Erro';
          expressaoAtual = '';
    }
}

function limpar() {
    expressaoAtual = '';
    displayResultado.textContent = '0';
    displayExpressao.textContent = '';
}

function apagar() {
    expressaoAtual = expressaoAtual.slice(0, -1);
    displayResultado.textContent = expressaoAtual || '0';
}

document.addEventListener('keydown', function(evento) {
    const tecla = evento.key;
    if ('0123456789'.includes(tecla)) inserir(tecla);
    else if (['+', '-', '*', '/', '%', '.'].includes(tecla)) inserir(tecla);
    else if (tecla === 'Enter') calcular();
    else if (tecla === 'Backspace') apagar();
    else if (tecla === 'Escape') limpar();
});
