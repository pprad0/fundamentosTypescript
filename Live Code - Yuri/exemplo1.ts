// let variavel: any = 'qualquer coisa'
// console.log("Valor da varíavel any:", variavel)

// variavel = 22
// console.log("Valor da varíavel any:", variavel)

// variavel = true
// console.log("Valor da varíavel any:", variavel)


// let valor: boolean = true
// console.log("Valor da varíavel boolean:", variavel)


// const tuplaExemplo: [string, number] = ['Márcia Marciana', 23.4]

// console.log(tuplaExemplo)

function somarNumeros(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(somarNumeros());
console.log(somarNumeros(10, 20));
console.log(somarNumeros(10, 20, 30));