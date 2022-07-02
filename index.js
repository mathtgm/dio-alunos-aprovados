const ALUNOS = [
    {
        nome : 'Matheus Gabriel',
        tumar : '1B',
        nota : 10
    },
    {
        nome : 'Maria Gabriela',
        turma : '3A',
        nota : 8
    },
    {
        nome : 'Leticia Silva',
        turma : '3B',
        nota : 5
    }
]

const MEDIA_FINAL = 6;

function checaNota(alunos, MEDIA_FINAL) {
    let listaAprovados = [];

    for (let index = 0; index < alunos.length; index++) {
        const {nome, nota} = alunos[index];
        
        if(nota >= MEDIA_FINAL) {
            listaAprovados.push(nome);
        }
    }

    return listaAprovados;
}

console.log(checaNota(ALUNOS, MEDIA_FINAL));