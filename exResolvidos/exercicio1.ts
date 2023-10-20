const funcaoString = (string: string) => {
    console.log(`String: ${string}`)
}

const funcaoNumber = (num1: number, num2: number) => {
    console.log(`Número 1: ${num1} \nNúmero 2: ${num2}`)
}

const funcaoStringNumber = (string: string, num: number) => {
    console.log(`String: ${string} \nNúmero: ${num}`)
}

funcaoString("Macarrão com fritas")
funcaoNumber(1,10)
funcaoStringNumber("Dodói", 659)