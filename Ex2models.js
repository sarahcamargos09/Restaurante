class Pessoa {
  constructor(id_pessoa, cpf, nome) {
    this.id_pessoa = id_pessoa;
    this.cpf = cpf;
    this.nome = nome;
  }
}

class Cliente extends Pessoa {
  constructor(id_pessoa, cpf, nome) {
    super(id_pessoa, cpf, nome);
  }
}

class Funcionario extends Pessoa {
  constructor(id_pessoa, cpf, nome, matricula) {
    super(id_pessoa, cpf, nome);
    this.matricula = matricula;
  }
}

class Garcom extends Funcionario {
  constructor(id_pessoa, cpf, nome, matricula) {
    super(id_pessoa, cpf, nome, matricula);
  }
}

class Cozinheiro extends Funcionario {
  constructor(id_pessoa, cpf, nome, matricula) {
    super(id_pessoa, cpf, nome, matricula);
  }
}

class Mesa {
  constructor(numero, capacidade, localizacao) {
    this.numero = numero;
    this.capacidade = capacidade;
    this.localizacao = localizacao;
  }
}

class ItemPedido {
  constructor(quantidade, preco) {
    this.quantidade = quantidade;
    this.preco = preco;
  }
}

class Pedido {
  constructor(numero, data, cliente, garcom, itens = []) {
    this.numero = numero;
    this.data = data;
    this.cliente = cliente;
    this.garcom = garcom;
    this.itens = itens;
    this.valorTotal = this.calcularValorTotal();
  }

  calcularValorTotal() {
    return this.itens.reduce((acc, item) => acc + (item.quantidade * item.preco), 0);
  }
}

class PedidoController {
  create(dados) {}
  read() {}
  update(numero, novosDados) {}
  delete(numero) {}
}

const clienteRestaurante = new Cliente(1, '111.222.333-44', 'Carlos Eduardo');
const garcomRestaurante = new Garcom(2, '555.666.777-88', 'Roberto Silva', 'G-201');
const item1 = new ItemPedido(2, 45.00);
const item2 = new ItemPedido(1, 15.50);

const pedidoRestaurante = new Pedido(1001, '08/09/2026', clienteRestaurante, garcomRestaurante, [item1, item2]);

console.log('Teste Restaurante');
console.log(pedidoRestaurante);