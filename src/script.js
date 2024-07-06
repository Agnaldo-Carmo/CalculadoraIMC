

window.onload = function () {

    //Recupera o elemento botão pelo id "calcular"
    document.getElementById("Calcular").addEventListener("click", function () {

        //Atribui os Valores dos formularios em suas respectivas variaveis
        altura = document.getElementById("altura").value;
        peso = document.getElementById("peso").value;

        //Calcula o IMC e atribui em uma variavel
        imc = peso / (altura * altura);

        /*Determina a Classificação do IMC obtido comparando o Resultado com os parametros estabelecidos 
        e guarda o valor em uma variavel*/

        if (imc < 18.5) {

            classificacao = "abaixo do peso"

        } else if (18.5 <= imc && imc < 24.9) {

            classificacao = "no peso normal"

        } else if (25 <= imc && imc < 29.9) {

            classificacao = "com sobrepeso"

        } else if (imc >= 30) {

            classificacao = "com obesidade"

        }

        //Faz uma validação para impedir que os campos altura e peso sejam deixados vazios
        if (altura == "" || peso == "") {

            alert("Favor preencher todos os dados")

        } else {

            //Atribui o valor calculado do IMC ao campo resultado arrendondando para duas casas decimais

            document.getElementById("resultado").value = imc.toFixed(2);

            /*Exibe para o usuario uma Mensagem concatenada com o valor da variavel "classificacao" 
             informando sua situação com base no IMC*/

            document.getElementById("classificacao").value = "Você está " + classificacao;


        }

    })

    //Limpa todos os campos permitindo que o usuario digite novamente ou faça ou novo calculo
    document.getElementById("Limpar").addEventListener("click", function () {

        altura = document.getElementById("altura").value = "";
        peso = document.getElementById("peso").value = "";
        document.getElementById("resultado").value = "";
        document.getElementById("classificacao").value = "";

    })
}

/*Exemplos de Teste:

Altura = 1,70
Peso = 50 
Resultado = 17,30
Classificação = abaixo do peso.

Altura = 1,85
Peso = 75
Resultado = 21,91
Classificação = peso normal.

Altura = 1,75
Peso = 80 
Resultado = 26,12
Classificação = sobrepeso.

Altura = 1,65
Peso = 95 
Resultado = 34,89
Classificação = obesidade.

*/

