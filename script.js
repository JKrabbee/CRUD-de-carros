const carros = [];

function ordenarPorPreco(carros) {
    carros.sort((a, b) => {
      return a.preco - b.preco;
    });
  }

function atualizarQntdCarros () {
    let quantidadeDeVeiculos = carros.length;
    let quantidade = document.getElementById("total-veiculos");
    quantidade.textContent = quantidadeDeVeiculos;
}
atualizarQntdCarros();

function cadastrarVeiculo() {
  let carro = {};

  carro.id = parseInt(Date.now());

  carro.modelo = prompt("Digite o modelo:");
  while (!carro.modelo) {
    carro.modelo = prompt("Digite o modelo corretamente (não pode ser vazio):");
  }

  carro.marca = prompt("Digite a marca:").toLocaleUpperCase();
  while (!carro.marca) {
    carro.marca = prompt(
      "Digite a marca corretamente (não pode ser vazio):"
    ).toLocaleUpperCase();
  }

  carro.ano = parseInt(prompt("Digite o ano:"));
  while (isNaN(carro.ano) || carro.ano.toString().length !== 4) {
    carro.ano = parseInt(
      prompt("Digite o ano corretamente (4 dígitos numéricos):")
    );
  }

  carro.cor = prompt("Digite a cor:");
  while (!carro.cor) {
    carro.cor = prompt("Digite a cor corretamente (não pode ser vazio):");
  }

  carro.preco = parseFloat(prompt("Digite o preço:"));
  while (isNaN(carro.preco) || carro.preco <= 0) {
    carro.preco = parseFloat(
      prompt("Digite o preço corretamente (maior que zero):")
    );
  }

  carros.push(carro);
  atualizarQntdCarros();
}

function listarVeiculos() {
    ordenarPorPreco(carros)
  carros.forEach((carro) => {
    console.log(
      `ID: ${carro.id} | Modelo: ${carro.modelo} | Marca: ${carro.marca} | Ano: ${carro.ano} | Cor: ${carro.cor} | Preço: R$ ${carro.preco}`
    );
  });
}

function filtrarPorMarca() {
  const marca = prompt("Digite a marca:").toLocaleUpperCase();
  let marcaEncontrada = false;

  carros.filter((carro) => {
    if (carro.marca === marca) {
      console.log(
        `ID: ${carro.id} | Modelo: ${carro.modelo} | Cor: ${carro.cor} | Preço: R$ ${carro.preco}`
      );
      marcaEncontrada = true;
    }
  });

  if (!marcaEncontrada) {
    alert(`Marca não encontrada.`);
  }
}

function atualizarVeiculo() {
    const id = parseInt(prompt("Escreva o ID:"));
  let carroEncontrado = false;

  carros.find((carro) => {
    if (carro.id === id) {
      carro.cor = prompt("Atualize a cor:");
      carro.preco = prompt("Atualize o preço:");
      carroEncontrado = true;
    }
  });

  if (!carroEncontrado) {
    alert(`Veículo não encontrado.`);
  }
}

function removerVeiculo() {
    const id = parseInt(prompt("Escreva o ID:"));
    let carroEncontrado = false;
  
    carros.forEach((carro, index) => {
      if (carro.id === id) {
        carros.splice(index, 1)
        carroEncontrado = true;
      }
    });
  
    if (!carroEncontrado) {
      alert(`Veículo não encontrado.`);
    }

    atualizarQntdCarros();
  }