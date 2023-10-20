let listaProdutos:any = []

interface Produto {
    nome: string
    marca: string
    valor: number
}


const Fruta1 : Produto = {
    nome: "Laranja Lima",
    marca: "Laranjeira do seu Zé",
    valor: 2.59
}

const Fruta2 : Produto = {
    nome: "Maçã Fuji",
    marca: "Macieira do seu Zé",
    valor: 3.35
}


const armazenarProdutos = (...produtos:any[]) => {
    produtos.forEach((item) => listaProdutos.push(item))
}


armazenarProdutos(Fruta1, Fruta2)
console.log('\nLista de produtos:\n', listaProdutos)