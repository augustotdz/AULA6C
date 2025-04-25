// Função para classificar o atleta baseado na idade
function classificarAtleta() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
  
    // Função que retorna a categoria do atleta
    function categorizarAluno(idade) {
        if (idade <= 12) {
          return "Infantil"; 
        } else if (idade >= 13 && idade <= 18) {
          return "Juvenil"; 
        } else if (idade >= 19 && idade <= 59) {
          return "Adulto"; 
        } else {
          return "Idoso"; 
        }
      }

  
    // Função que retorna uma linha com "-" abaixo do nome
    function retornarTracos(nome) {
      return nome.replace(/[a-zA-Z]/g, '-'); // Substitui as letras do nome por "-"
    }
  
    // Exibe o nome com tracinho e a categoria
    const categoria = categorizarAluno(idade);
    const tracos = retornarTracos(nome);
  
    document.getElementById('resultado').innerHTML = `
      <strong>Nome:</strong> ${nome}<br>
      <strong>Idade:</strong> ${idade} anos<br>
      <strong>Categoria:</strong> ${categoria}<br>
      <pre>${tracos}</pre>
    `;
  }
