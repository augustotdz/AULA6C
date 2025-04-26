function mostrarConvenios() {
    const sim = document.getElementById('sim');
    const nao = document.getElementById('nao');
    const box = document.getElementById('boxConvenio');
  
    // Se o usuário escolheu "Sim", mostramos a caixa de seleção
    if (sim.checked) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  }
  
  function calcularDesconto(valor, taxa) {
    return valor * taxa;
  }
  
  function calcular() {
    const preco = parseFloat(document.getElementById('preco').value);
    const sim = document.getElementById('sim').checked;
    const nao = document.getElementById('nao').checked;
  
    if (isNaN(preco) || preco <= 0) {
      document.getElementById('resultado').innerText = "Informe um valor válido para a vacina.";
      return;
    }
  
    let taxa = 0.10; // Desconto de 10% para "Não tem convênio"
    
    // Se o usuário tem convênio e escolheu "Amigo dos Animais" ou "Saúde Animal"
    if (sim) {
      const tipo = document.getElementById('convenio').value;
      if (tipo === 'amigo') {
        taxa = 0.20; // 20% de desconto
      } else if (tipo === 'saude') {
        taxa = 0.50; // 50% de desconto
      }
    }
  
    const desconto = calcularDesconto(preco, taxa);
    const total = preco - desconto;
  
    document.getElementById('resultado').innerHTML = `
      Desconto: R$ ${desconto.toFixed(2)} <br>
      Valor a pagar: R$ ${total.toFixed(2)}
    `;
  }
  