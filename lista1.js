
function somarArray(arr){
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function numeroPrimo(num){
    
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

function contarVogais(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vogais.includes(char)) count++;
    }
    return count;
}

function inverterString(str) {

    return str.split('').reverse().join('');
}

function fatorial(n) {

    if (n === 0 || n === 1) return 1;
    return n * fatorial(n - 1);

}

function maiorNumero(arr) {
    return Math.max(...arr);
}

function palindromo(str) {

    const strInvertida = str.split('').reverse().join('');
    return str === strInvertida;
}
function ordenarArray(arr) {

    return arr.sort((a, b) => a - b);
}

function contarOcorrencias(str, char) {
    let count = 0;
    for (let c of str) {

        if (c === char) count++;
    }
    return count;
}
function mediaArray(arr) {

    const soma = arr.reduce((acc, num) => acc + num, 0);
    return soma / arr.length;
}
