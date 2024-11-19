const alunos = [
    { nome: 'Hanna', nota: 8 },
    { nome: 'Gustavo', nota: 5.5 },
    { nome: 'Oliver', nota: 6 },
    { nome: 'Michael', nota: 9 },
    { nome: 'Júlia', nota: 7 },
    { nome: 'Teresa', nota: 4.7 }
];

const filtrarAprovados = (listaAlunos) => {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
};

const alunosAprovados = filtrarAprovados(alunos);

console.log('Alunos aprovados:', alunosAprovados);
