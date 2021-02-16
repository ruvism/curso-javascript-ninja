// Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! 😄

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma (x, y){ return x + y };

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando 5 ao resultado retornado da função.

var animal = soma(2, 3) + 5;

// Qual o valor atualizado dessa variável?

animal = 10;

// Declare uma nova variável, sem valor.

var center;

/* Crie uma função que adicione um valor à variável criada acima, e retorne a string: O valor da variável agora é VALOR. Onde VALOR é o novo valor da variável. */

function hold (x, y){
    var center = x + y;
    return "O valor da variável agora é " + center;
}

// Invoque a função criada acima.

hold();

// Qual o retorno da função? (Use comentários de bloco).

/* Crie uma função com as seguintes características:

A função deve receber 3 argumentos;
Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string: Preencha todos os valores corretamente!
O retorno da função deve ser a multiplicação dos 3 argumentos, somando 2 ao resultado da multiplicação. */

function restless (x, y, z){
    if ( x === ' ' || y === ' ' || z === ' '){
        return "Preencha todos os valores corretamente";
    } else {
        return (x * y * z) + 2
    }
}

// Invoque a função criada acima, passando só dois números como argumento.

restless(1, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

NaN

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

restless(1, 2, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

6

/* Crie uma função com as seguintes características:

A função deve receber 3 argumentos.
Se somente um argumento for passado, retorne o valor do argumento.
Se dois argumentos forem passados, retorne a soma dos dois argumentos.
Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
Se nenhum argumento for passado, retorne o valor booleano false.
E ainda, se nenhuma das condições acima forem atendidas, retorne null. */
function price (x, y, z){
    if(x != ' ' && y == ' ' && z == ' '){
        return x;
    } else if(x != ' ' && y != ' ' && z == ' ' ) {
        return x + y;
    } else if(x != ' ' && y != ' ' && z != ' ' ){
        return (x + y)/z;
    } else if (x == ' ' && y == ' ' && z == ' ' ){
        return false;
    } else{
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

price(0, 0, 0) - false

price(1, 0, 0) - 1

price(1, 2, 0) - 3

price(1, 1, 1) - 2

price(1, 0, 1) - null

