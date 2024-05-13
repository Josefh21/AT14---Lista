//exercicioUm = function(){   
//
//    var um = Number(prompt("Digite a primeira variável:"))
//    var dois = Number(prompt("Digite a segunda variável:"))
//
//    console.log(`A diferença das duas variáveis é: ${Math.abs(um - dois)}.`);
//    console.log(`O dobro da primeira variável é: ${um * 2}, e o triplo da segunda variável é: ${dois * 3}.`);
//    console.log(`A multiplicação das duas variáveis equivale a: ${um * dois}.`);
//    console.log(`Variável ${um >= dois? um:dois} > variável: ${dois >= um? um:dois}`);
//}
//
//exercicioDois = function(){
//
//    var nome = prompt("Nome do funcionário:");
//    var salario = Number(prompt("Salário do funcionário:"));
//    var salarioFinal = salario - salario * 0.08
//
//    console.log(`${nome} recebe R$${salario}, após a aplicação do desconto do INSS o salário fica em: R$${salarioFinal}.`);
//}
//
//exercicioTres = function(){
//
//   var nome = prompt("Nome do funcionário:");
//    var salario = Number(prompt("Salário do funcionário:"));
//    var taxa;
//
//    if(salario <= 1000) {
//        taxa = 0.08;
//    } else if (salario > 1000 && salario <= 1500) {
//        taxa = 0.085;
//    } else {
//        taxa = 0.09;
//    }
//
//    var desconto = salario * taxa;
//    var salarioFinal = salario - desconto;
//    console.log(`O ${nome} recebe R$${salario},e com uma taxa de ${taxa}, recebe o valor de R$${salarioFinal}.`);
//}
//
//exercicioUm()
//exercicioDois()
//exercicioTres()

function exercicioUm() {
    var um = Number(document.getElementById("varUm").value);
    var dois = Number(document.getElementById("varDois").value);

    var resultadoUm = document.getElementById("resultadoUm");
    resultadoUm.innerHTML = `A diferença das duas variáveis é: ${Math.abs(um - dois)}.<br>
                            O dobro da primeira variável é: ${um * 2}, e o triplo da segunda variável é: ${dois * 3}.<br>
                            A multiplicação das duas variáveis equivale a: ${um * dois}.<br>
                            Variável ${um >= dois ? um : dois} > variável: ${dois >= um ? um : dois}`;
}

function exercicioDois() {
    var nome = document.getElementById("nomeFunc").value;
    var salario = Number(document.getElementById("salarioFunc").value);
    var salarioFinal = salario - salario * 0.08;

    var resultadoDois = document.getElementById("resultadoDois");
    resultadoDois.innerHTML = `${nome} recebe R$${salario}, após a aplicação do desconto do INSS o salário fica em: R$${salarioFinal}.`;
}

function exercicioTres() {
    var nome = document.getElementById("nomeFuncTres").value;
    var salario = Number(document.getElementById("salarioFuncTres").value);
    var taxa;

    if (salario <= 1000) {
        taxa = 0.08;
    } else if (salario > 1000 && salario <= 1500) {
        taxa = 0.085;
    } else {
        taxa = 0.09;
    }

    var desconto = salario * taxa;
    var salarioFinal = salario - desconto;

    var resultadoTres = document.getElementById("resultadoTres");
    resultadoTres.innerHTML = `O ${nome} recebe R$${salario}, e com uma taxa de ${taxa}, recebe o valor de R$${salarioFinal}.`;
}