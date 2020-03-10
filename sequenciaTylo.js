const teste = require('readline-sync')

var valor;
var trucamento;
var opcao;

function sequencia(valor, trucamentoDaSequencia, opcao) {
   opcao = opcao
   trucamento = trucamentoDaSequencia;
   valor = valor;

   if(opcao == 1 || opcao == "1"){
      euler(valor, trucamento, opcao)
   } else if(opcao == 2 || opcao == "2" ){
      cosseno(valor, trucamento)
   } else if(opcao == 3 || opcao == "3" ){
      seno(valor, trucamento)
   }
}


function fatorial(n) {
   if (n == 0) {
       return 1;
   }
   var resp = n;
   while (n > 2) {
       resp *= --n;
   }
   return resp;
}

function euler(valor, trucamento ,opcao) {
   var resultado = 0;
   for(var i = 0; i< trucamento; i++){
      resultado += (Math.pow(valor,i))/fatorial(i)
      resultadoTrucamento(resultado,i+1, opcao, valor)
   }
   return resultado
}


function cosseno(valor, trucamento) {
   var resultado = 0
   for(var i = 0; i < trucamento; i++){
      resultado += Math.pow(-1,i)*Math.pow(valor,2*i)/fatorial(2*i);
      resultadoTrucamento(resultado,i+1, opcao);
   }

   return resultado;
}

function seno(valor, trucamento) {
   var resultado = 0;
   for(var i = 0; i<trucamento; i++){
      resultado += Math.pow(-1, i)*((Math.pow(valor, 2*i+1))/(fatorial(2*i+1)));
      resultadoTrucamento(resultado, i+1, opcao)
   }
   return resultado
}

function resultadoTrucamento(resultado, numero, opcao, valor) {
   var string = "";
   for(var i =0; i<100; i++){
      string += "-"
   }
   console.log(string)

   var truco = 0

   console.log(numero + " º Truncamento:")


   if(opcao == 1 || opcao == "1"){
      truco = 100*(((resultado-Math.exp(valor))/(Math.exp(valor)))*100)

      console.log("\n Resultado do sistema: " + resultado + " - Valor Original: " + Math.exp(valor))
      //console.log(truco)
   } else if(opcao == 2 || opcao == "2"){
      truco = 100*(((resultado-Math.cos(valor))/(Math.cos(valor)))*100)

      console.log("\n Resultado do sistema: " + resultado + "- Valor Original: " + Math.cos(valor))
      console.log(truco)
      
   } else if(opcao == 3 || opcao == "3"){
      truco = 100*(resultado-Math.sin(valor))/(Math.sin(valor))

      console.log("\n Resultado do sistema: " + resultado + "- Valor Original: " + Math.sin(valor))
      console.log(truco)
   }
}




var renan1 = parseInt( teste.question("Digite um valor qualquer, por favor: \n"))
var renan2 = parseInt(teste.question("Digite um valor para o truncamento da série de Taylor, por favor: \n"))
var renan3 = parseInt(teste.question("Selecione:\n1 - Para Seno:\n2 - Para Cosseno\n3 - Para Euler\n"))

sequencia(renan1, renan2, renan3)








