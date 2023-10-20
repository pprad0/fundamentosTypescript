interface User {
    nome: string
    idade: number
    email: string
    senha: string
    ativo: boolean
}

const Adm : User = {
    nome: 'Rootroot',
    idade: 30,
    email: 'root@root.com',
    senha: 'rootroot',
    ativo: true
}

const Aluno1 : User = {
    nome: 'Pedro',
    idade: 23,
    email: 'pedro@melo.com',
    senha: 'pepedrinho',
    ativo: false
}

console.log(Adm, Aluno1)