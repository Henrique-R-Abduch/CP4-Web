// Criação do objeto escola
const escola = {
    curso: 'Ciência da Computação',
    aluno: ['João', 'Maria', 'Pedro', 'Ana'],
    professor: ['José', 'Carla', 'Márcio'],
    turma: 'Turma A',
    período: 'Noturno',
    
    // Método para apresentar aluno estudando na tela
    telaAlunoEstudando: function(aluno) {
      console.log(`${aluno} está estudando na ${this.turma} no período ${this.período}.`);
    }
  };
  
  // Exibição do aluno estudando na tela
  escola.telaAlunoEstudando('João');
  
  // Busca de um aluno utilizando o método find
  const alunoBuscado = escola.aluno.find(function(aluno) {
    return aluno === 'Maria';
  });
  
  // Exibição do aluno encontrado na tela
  console.log(`Aluno encontrado: ${alunoBuscado}.`);