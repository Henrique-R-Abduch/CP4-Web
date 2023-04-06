// Criação do objeto funcionários
const funcionarios = [
    { nome: 'João', idade: 30, sexo: 'Masculino', cargo: 'Analista de Sistemas', salario: 5000, descontos: 1000, dataAdmissao: '01/05/2005', dataDemissao: null },
    { nome: 'Maria', idade: 25, sexo: 'Feminino', cargo: 'Programadora', salario: 4000, descontos: 800, dataAdmissao: '10/02/2009', dataDemissao: '20/06/2022' },
    { nome: 'Pedro', idade: 40, sexo: 'Masculino', cargo: 'Gerente de Projetos', salario: 7000, descontos: 1500, dataAdmissao: '05/10/2003', dataDemissao: null },
    { nome: 'Ana', idade: 35, sexo: 'Feminino', cargo: 'Analista de Qualidade', salario: 5500, descontos: 1200, dataAdmissao: '20/08/2012', dataDemissao: '01/11/2019' },
  ];
  
  // Filter de funcionários com data de admissão entre 2000 e 2010
  const funcionariosAdmitidos = funcionarios.filter(function(funcionario) {
    const dataAdmissao = new Date(funcionario.dataAdmissao);
    return dataAdmissao.getFullYear() >= 2000 && dataAdmissao.getFullYear() <= 2010;
  });
  
  console.log('Funcionários admitidos entre 2000 e 2010:');
  console.log(funcionariosAdmitidos);
  
  // Filter de funcionários demitidos depois de 2018
  const funcionariosDemitidos = funcionarios.filter(function(funcionario) {
    if (funcionario.dataDemissao !== null) {
      const dataDemissao = new Date(funcionario.dataDemissao);
      return dataDemissao.getFullYear() > 2018;
    }
  });
  
  console.log('Funcionários demitidos depois de 2018:');
  console.log(funcionariosDemitidos);
  
  // Map de funcionários para trazer nome, salário e desconto
  const funcionariosMapeados = funcionarios.map(function(funcionario) {
    return {
      nome: funcionario.nome,
      salario: funcionario.salario,
      descontos: funcionario.descontos,
    };
  });
  
  console.log('Funcionários mapeados com nome, salário e desconto:');
  console.log(funcionariosMapeados);
  
  // Reduce para somar o valor total dos descontos
  const valorTotalDescontos = funcionarios.reduce(function(total, funcionario) {
    return total + funcionario.descontos;
  }, 0);
  
  console.log(`Valor total dos descontos: ${valorTotalDescontos}`);