//Pessoa 1
let nome1 = prompt("Digite seu nome:");
let peso1 = prompt("Qual seu peso ?");
let altura1 = prompt("Qual sua altura ?");

let imc1 = peso1 / (altura1 * altura1);

let nome2 = prompt("Digite o nome da pessoa que sera comparada ?:");
let peso2 = prompt("Qual o peso dela ?");
let altura2 = prompt("Qual a altura dela ?");

let imc2 = peso2 / (altura2 * altura2);

if (imc1 > imc2) {
  console.log(`O IMC do ${nome1}(${imc1}) é maior que o de ${nome2}(${imc2})`);
} else if (imc1 === imc2) {
  console.log(`O IMC de ${nome1}(${imc1}) é igual que o de ${nome2}(${imc2})`);
} else {
  console.log(`O IMC do ${nome1}(${imc1}) é menor que o de ${nome2}(${imc2})`);
}

//Comparação IMC

if (imc1 < 17) {
  console.log(`O IMC do ${nome1}(${imc1}) está muito abaixdo do peso`);
} else if (imc1 >= 17 && imc1 < 18.49) {
  console.log(`O IMC de ${nome1}(${imc1}) está abaixo do peso`);
} else if (imc1 > 18.5 && imc1 < 24.99) {
  console.log(`O IMC de ${nome1}(${imc1}) Está com o peso normal`);
} else if (imc1 >= 25 && imc1 < 29.99) {
  console.log(`O IMC de ${nome1}(${imc1}) Está acima do peso`);
} else if (imc1 >= 30 && imc1 < 34.99) {
  console.log(`O IMC de ${nome1}(${imc1}) está obeso`);
} else if (imc1 >= 35 && imc1 < 39.99) {
  console.log(`O IMC de ${nome1}(${imc1}) está com obesidade severa`);
} else {
  console.log(`O IMC do ${nome1}(${imc1}) Está com obesidade morbida`);
}

//Login e Senha

let login = prompt("Digite o seu Login:");
let senha = prompt("Digita a sua Senha:");

if (
  (login == "aluno" && senha == 123) ||
  (login == "professor" && senha == 456)
) {
  console.log(`${login} Logado com sucesso!`);
} else {
  console.log(`${login} Seu login está inválido!`);
}

// Impressão Array ao contrario

let n = prompt("Informe um numero:");
let palavras = new Array(parseInt(n - 1));
for (let i = 0; i <= parseInt(n - 1); i++) {
  palavras[i] = prompt(`Digite ${i + 1}° Palavra:`);
}

for (let a = parseInt(n - 1); a >= 0; a--) {
  console.log(`${palavras[a]}`);
}

// Função para calcular aposentadoria with arrow function
const funcao = (nomeIdade, idadeIdade) => {
  if (idadeIdade >= 65) {
    console.log(`${nomeIdade}, você já está com idade pra se encostar ein!`);
  } else {
    console.log(
      `${nomeIdade} faltam ${
        65 - parseInt(idadeIdade)
      } anos para você TENTAR se aposentar!`
    );
  }
};

let nomeIdade = prompt(`Informe seu nome:`);
let idadeIdade = prompt(`Informe sua idade:`);
funcao(nomeIdade, idadeIdade);

//Função Calcular Gorjeta

function calculaGorjeta(valores) {
  let gorjetas = new Array(2);
  for (let i = 0; i <= valores.length; i++) {
    if (valores[i] < 50) {
      gorjetas[i] = parseInt(valores[i]) * (20 / 100);
    } 
    else if (valores[i] > 50 && valores[i] < 200) {
      gorjetas[i] = parseInt(valores[i]) * (15 / 100);
    } 
    else if (valores[i] > 200) {
      gorjetas[i] = parseInt(valores[i]) * (10 / 100);
    }
  }
  return gorjetas;
}
function exibirTotal(restaurantes, valores, gorjetas) {
  for (let a = 0; a <= 2; a++) {
    console.log(
      `Restaurante ${restaurantes[a]} [Total da Conta: R$${
        valores[a]
      } | Gorjeta: R$${gorjetas[a]} | Total: R$${
        parseInt(gorjetas[a]) + parseInt(valores[a])
      }]`
    );
  }
}
let restaurantes = new Array(2);
let valores = new Array(2);

for (let i = 0; i <= 2; i++) {
  restaurantes[i] = prompt("Nome do restaurante:");
  valores[i] = prompt("Valor total da conta:");
}
gorjetas = calculaGorjeta(valores);
exibirTotal(restaurantes, valores, gorjetas);

//let valor = prompt(' Qual o nome do seu professor? ');
//console.log(typeof nome);

//let valor = prompt(' Qual o peso dele ? ');
//console.log(typeof peso);

//let valor = prompt(' Qual a altura dele? ');
//console.log(typeof altura);
