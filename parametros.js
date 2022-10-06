// parâmetros de função

            // 2        //2
// function soma(numero1, numero2) {
//    return numero1 + numero2;
// }

// console.log(soma(2, 2));
// console.log(soma(245, 20));
// console.log(soma(-500, 60));

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}
// console.log(nomeIdade(31, "Thita"));

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

// ele vai multiplicar 9 x 6 que é o valor das somas
// console.log(multiplica(soma(4,5), soma(3, 3)));
// ele calcula apenas o primeiro parâmetro
console.log(multiplica(soma(4,5)));