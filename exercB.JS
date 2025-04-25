// Verifica se o nome possui pelo menos dois nomes (nome completo)
function validarNome(nome) {
    const partes = nome.trim().split(" ");
    return partes.length >= 2;
  }
  
  // Retorna o último nome (sobrenome) em minúsculas
  function obterSobrenome(nome) {
    const partes = nome.trim().split(" ");
    return partes[partes.length - 1].toLowerCase();
  }
  
  // Conta o número de vogais no nome completo, com dois dígitos
  function contarVogais(nome) {
    const vogais = nome.match(/[aeiouáéíóúàèìòùãõâêîôû]/gi);
    const total = vogais ? vogais.length : 0;
    return total.toString().padStart(2, "0");
  }
  
  // Função principal que gera a senha
  function gerarSenha() {
    const nome = document.getElementById("nome").value;
  
    if (!validarNome(nome)) {
      document.getElementById("resultado").innerText = "Por favor, digite o nome completo.";
      return;
    }
  
    const sobrenome = obterSobrenome(nome);
    const numVogais = contarVogais(nome);
  
    const senha = sobrenome + numVogais;
  
    document.getElementById("resultado").innerText = `Senha inicial: ${senha}`;
  }
  